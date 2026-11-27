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
  const W=coarse.matches?720:1440;
  const H=Math.max(320,Math.min(coarse.matches?1440:1350,Math.round(W/aspect/2)*2));
  const source=document.createElement('canvas');
  source.width=W;source.height=H;
  const scale=Math.max(W/image.width,H/image.height);
  const sw=W/scale,sh=H/scale;
  source.getContext('2d').drawImage(image,(image.width-sw)*.5,(image.height-sh)*.5,sw,sh,0,0,W,H);
  const maps=deriveMaps(source);
  const renderer=new THREE.WebGLRenderer({canvas,antialias:false,preserveDrawingBuffer:false,powerPreference:'low-power'});
  renderer.setPixelRatio(1);
  renderer.setSize(W,H,false);
  const field=buildField(renderer,{image:source,maps,width:W,height:H,wind:snow?.14:maps.dominant,light:130*Math.PI/180,amp:snow?.52:.72,natural:snow,density:snow?(coarse.matches?.44:.55):(coarse.matches?.65:.8)});
  const post=makePost(renderer,W,H,field,snow);
  let raf=0,frame=0,last=0,elapsed=0,visible=true,lost=false;
  const fps=coarse.matches?15:24;
  const draw=()=>{
    field.update((elapsed/(snow?18000:18000))%1);
    post.renderScene(frame++);
    post.output('ascii');
    canvas.dataset.asciiState='ready';
    canvas.dataset.asciiFrames=String(frame);
  };
  const active=()=>!dark()&&!document.hidden&&visible&&!lost;
  const tick=now=>{
    if(!active()||reduced.matches){raf=0;last=0;return;}
    if(!last||now-last>=1000/fps-1){
      elapsed+=last?Math.min(now-last,snow?1000:100):0;last=now;draw();
    }
    raf=requestAnimationFrame(tick);
  };
  const restart=()=>{cancelAnimationFrame(raf);raf=0;last=0;if(active()){draw();if(!reduced.matches)raf=requestAnimationFrame(tick)}};
  new IntersectionObserver(([e])=>{visible=e.isIntersecting;restart()}).observe(backdrop);
  new MutationObserver(restart).observe(document.documentElement,{attributes:true,attributeFilter:['class']});
  document.addEventListener('visibilitychange',restart);
  reduced.addEventListener('change',restart);
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;cancelAnimationFrame(raf);canvas.dataset.asciiState='fallback'});
  restart();
}
