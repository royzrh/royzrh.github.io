// Homepage adapter for living-ascii, Copyright (c) 2026 Yusen (MIT).
// Original source: https://github.com/yusen-dev/living-ascii
import * as THREE from './three.module.min.js';
import {loadImage,deriveMaps} from './maps.js';
import {buildField} from './field.js';
import {makePost} from './post.js';
import {rasterSizes} from './raster-size.js';
export async function mount(canvas){
  const backdrop=canvas.parentElement;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const coarse=matchMedia('(pointer: coarse)');
  const dark=()=>document.documentElement.classList.contains('dark');
  const snow=backdrop.dataset.asciiVariant==='snow';
  const safari=/AppleWebKit/i.test(navigator.userAgent)&&/Safari\//i.test(navigator.userAgent)&&!/Chrome|Chromium|CriOS|FxiOS|Edg|OPR|DuckDuckGo|GSA/i.test(navigator.userAgent);
  const lowOverhead=safari&&snow;
  // Select only one daylight image per homepage mount. Remember the last
  // selection in this tab so a reload does not repeat it.
  const homeImages=['ginkgo-sky.webp','green-canopy.webp','sunlit-leaves.webp','golden-clouds.webp'];
  let imageName='grass.webp';
  if(snow){
    const key='roy-home-ascii-last-image';
    let previous='';
    try{previous=sessionStorage.getItem(key)||''}catch{}
    const choices=homeImages.filter(name=>name!==previous);
    imageName=choices[Math.floor(Math.random()*choices.length)];
    try{sessionStorage.setItem(key,imageName)}catch{}
  }
  const image=await loadImage(new URL('./'+imageName,import.meta.url).href);
  canvas.dataset.asciiImage=imageName;
  backdrop.style.setProperty('--ascii-fallback-image', 'url("'+image.src+'")');
  const {W,H,outputW,outputH}=rasterSizes(backdrop.clientWidth,backdrop.clientHeight,snow,coarse.matches);
  const source=document.createElement('canvas');
  source.width=W;source.height=H;
  const scale=Math.max(W/image.width,H/image.height);
  const sw=W/scale,sh=H/scale;
  source.getContext('2d').drawImage(image,(image.width-sw)*.5,(image.height-sh)*.5,sw,sh,0,0,W,H);
  const maps=deriveMaps(source);
  const renderer=new THREE.WebGLRenderer({canvas,antialias:false,preserveDrawingBuffer:false,powerPreference:'low-power'});
  renderer.setPixelRatio(1);
  renderer.setSize(outputW,outputH,false);
  if(!renderer.extensions.has('EXT_color_buffer_float')){renderer.dispose();throw Error('Floating-point render targets unavailable');}
  const field=buildField(renderer,{image:source,maps,width:W,height:H,wind:snow?.14:maps.dominant,light:130*Math.PI/180,amp:snow?.74:.72,natural:snow,lowOverhead,density:lowOverhead?(coarse.matches?.30:.38):snow?(coarse.matches?.40:.50):(coarse.matches?.55:.68)});
  // Half-float multisampling is a known source of framebuffer compatibility
  // differences. Glyph edges are rasterized separately and do not need MSAA.
  const post=makePost(renderer,W,H,field,snow,0,outputW,outputH);
  canvas.dataset.asciiRaster=outputW+'x'+outputH;
  // Re-size only the final glyph layer when viewport size/orientation changes;
  // the field and its textures remain at the original modest scene resolution.
  let resizePending=false;
  let currentW=outputW,currentH=outputH;
  // Never queue more than one unfinished GPU frame. Keep animation phase
  // tied to active wall time rather than the number of rendered frames.
  const gl=renderer.getContext();
  let fence=null,raf=0,frame=0,last=0,elapsed=0,deadline=0,visible=true,lost=false;
  const header=document.querySelector("header-component");
  const fps=lowOverhead?(coarse.matches?12:20):snow?(coarse.matches?16:24):(coarse.matches?20:30);
  canvas.dataset.asciiTargetFps=String(fps);
  const interval=1000/fps;
  const gpuReady=()=>{
    if(!fence)return true;
    const status=gl.clientWaitSync(fence,0,0);
    if(status===gl.TIMEOUT_EXPIRED)return false;
    gl.deleteSync(fence);fence=null;
    return status!==gl.WAIT_FAILED;
  };
  const draw=()=>{
    if(resizePending){
      resizePending=false;
      const {outputW:w,outputH:h}=rasterSizes(backdrop.clientWidth,backdrop.clientHeight,snow,coarse.matches);
      if(w!==currentW||h!==currentH){
        renderer.setSize(w,h,false);
        post.resizeOutput(w,h);
        currentW=w;currentH=h;
        canvas.dataset.asciiRaster=w+'x'+h;
      }
    }
    field.update((elapsed/(snow?15000:18000))%1);
    post.renderScene(frame++);
    post.output('ascii');
    if(frame===1&&gl.getError()!==gl.NO_ERROR)throw Error('ASCII GPU render failed');
    fence=gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE,0);
    gl.flush();
    if(canvas.dataset.asciiState!=='ready')canvas.dataset.asciiState='ready';
    canvas.dataset.asciiFrames=String(frame);
  };
  const menuOpen=()=>header?.classList.contains('expanded')||!!document.querySelector('#header-account-dialog[open]');
  const active=()=>!dark()&&!document.hidden&&visible&&!lost&&!menuOpen();
  const stop=()=>{
    cancelAnimationFrame(raf);raf=0;last=0;deadline=0;
    canvas.dataset.asciiPaused='true';
  };
  const fail=error=>{
    lost=true;stop();canvas.dataset.asciiState='fallback';
    canvas.dataset.asciiError=String(error);console.warn('ASCII background fallback',error);
  };
  const safeDraw=()=>{try{draw();return true}catch(error){fail(error);return false}};
  const tick=now=>{
    raf=0;
    if(!active()){stop();return;}
    if(reduced.matches){if(gpuReady()){safeDraw();stop();}else raf=requestAnimationFrame(tick);return;}
    if(last)elapsed+=Math.min(now-last,250);
    last=now;
    if(!deadline)deadline=now;
    if(now>=deadline-1&&gpuReady()){
      if(!safeDraw())return;
      deadline+=interval*Math.max(1,Math.floor((now-deadline)/interval)+1);
    }
    raf=requestAnimationFrame(tick);
  };
  const restart=()=>{
    stop();
    if(!active())return;
    canvas.dataset.asciiPaused='false';
    raf=requestAnimationFrame(tick);
  };
  if(header){
    let expanded=menuOpen();
    new MutationObserver(()=>{
      const next=menuOpen();
      if(next!==expanded){expanded=next;restart();}
    }).observe(header,{attributes:true,attributeFilter:['class','open'],subtree:true});
  }
  new IntersectionObserver(([e])=>{if(visible!==e.isIntersecting){visible=e.isIntersecting;restart()}}).observe(backdrop);
  let wasDark=dark();
  new MutationObserver(()=>{const current=dark();if(current!==wasDark){wasDark=current;restart()}}).observe(document.documentElement,{attributes:true,attributeFilter:['class']});
  new ResizeObserver(()=>{
    if(!backdrop.clientWidth||!backdrop.clientHeight)return;
    resizePending=true;
    if(reduced.matches)restart();
  }).observe(backdrop);
  document.addEventListener('visibilitychange',restart);
  reduced.addEventListener('change',restart);
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;fence=null;cancelAnimationFrame(raf);canvas.dataset.asciiState='fallback'});
  restart();
}
