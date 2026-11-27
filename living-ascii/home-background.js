// Homepage adapter for living-ascii, Copyright (c) 2026 Yusen (MIT).
// Original source: https://github.com/yusen-dev/living-ascii
import * as THREE from './three.module.min.js';
import {loadImage,deriveMaps} from './maps.js';
import {buildField} from './field.js';
import {makePost} from './post.js';
export async function mount(canvas){
  const backdrop=canvas.parentElement;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const coarse=matchMedia('(pointer: coarse)');
  const dark=()=>document.documentElement.classList.contains('dark');
  const snow=backdrop.dataset.asciiVariant==='snow';
  const image=await loadImage(new URL(snow?'./ginkgo-sky.jpeg':'./grass.png',import.meta.url).href);
  // Keep glyphs legible at moderate raster size; no high-DPI multiplication.
  const aspect=Math.max(.4,backdrop.clientWidth/Math.max(1,backdrop.clientHeight));
  const W=coarse.matches?576:1080;
  const H=Math.max(320,Math.min(coarse.matches?1152:1012,Math.round(W/aspect/2)*2));
  const source=document.createElement('canvas');
  source.width=W;source.height=H;
  const scale=Math.max(W/image.width,H/image.height);
  const sw=W/scale,sh=H/scale;
  source.getContext('2d').drawImage(image,(image.width-sw)*.5,(image.height-sh)*.5,sw,sh,0,0,W,H);
  const maps=deriveMaps(source);
  const renderer=new THREE.WebGLRenderer({canvas,antialias:false,preserveDrawingBuffer:false,powerPreference:'low-power'});
  renderer.setPixelRatio(1);
  renderer.setSize(W,H,false);
  const field=buildField(renderer,{image:source,maps,width:W,height:H,wind:snow?.14:maps.dominant,light:130*Math.PI/180,amp:snow?.74:.72,natural:snow,density:snow?(coarse.matches?.40:.50):(coarse.matches?.55:.68)});
  const post=makePost(renderer,W,H,field,snow);
  // Never queue more than one unfinished GPU frame. Keep animation phase
  // tied to active wall time rather than the number of rendered frames.
  const gl=renderer.getContext();
  let fence=null,raf=0,frame=0,last=0,elapsed=0,deadline=0,visible=true,lost=false;
  const fps=coarse.matches?20:30;
  const interval=1000/fps;
  const gpuReady=()=>{
    if(!fence)return true;
    const status=gl.clientWaitSync(fence,0,0);
    if(status===gl.TIMEOUT_EXPIRED)return false;
    gl.deleteSync(fence);fence=null;
    return status!==gl.WAIT_FAILED;
  };
  const draw=()=>{
    field.update((elapsed/(snow?15000:18000))%1);
    post.renderScene(frame++);
    post.output('ascii');
    fence=gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE,0);
    gl.flush();
    if(canvas.dataset.asciiState!=='ready')canvas.dataset.asciiState='ready';
    canvas.dataset.asciiFrames=String(frame);
  };
  const active=()=>!dark()&&!document.hidden&&visible&&!lost;
  const tick=now=>{
    raf=0;
    if(!active()||reduced.matches){last=0;deadline=0;return;}
    if(last)elapsed+=Math.min(now-last,250);
    last=now;
    if(!deadline)deadline=now;
    if(now>=deadline-1&&gpuReady()){
      draw();
      deadline+=interval*Math.max(1,Math.floor((now-deadline)/interval)+1);
    }
    raf=requestAnimationFrame(tick);
  };
  const restart=()=>{
    cancelAnimationFrame(raf);raf=0;last=0;deadline=0;
    if(!active())return;
    if(reduced.matches){
      if(gpuReady())draw();
    }else raf=requestAnimationFrame(tick);
  };
  new IntersectionObserver(([e])=>{if(visible!==e.isIntersecting){visible=e.isIntersecting;restart()}}).observe(backdrop);
  let wasDark=dark();
  new MutationObserver(()=>{const current=dark();if(current!==wasDark){wasDark=current;restart()}}).observe(document.documentElement,{attributes:true,attributeFilter:['class']});
  document.addEventListener('visibilitychange',restart);
  reduced.addEventListener('change',restart);
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;fence=null;cancelAnimationFrame(raf);canvas.dataset.asciiState='fallback'});
  restart();
}
