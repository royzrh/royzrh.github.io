const a=document.querySelector("#home-fluid-canvas");if(a){const l=()=>document.documentElement.classList.contains("dark");let K=!1;const Y=()=>{if(K||!l())return;K=!0;const P=a.closest(".fluid-backdrop"),D=P.dataset.fluidVariant==="moments",Z=matchMedia("(prefers-reduced-motion: reduce)");let W=0;const O=()=>{if(W=0,!l())return;const E=Z.matches?0:Math.min(1,Math.max(0,window.scrollY/Math.max(P.clientHeight*.82,1))),N=E*E*(3-2*E);P.style.setProperty("--fluid-scroll-opacity",String(1-.65*N))},V=()=>{l()&&!W&&(W=requestAnimationFrame(O))};window.addEventListener("scroll",V,{passive:!0}),window.addEventListener("resize",V,{passive:!0}),Z.addEventListener("change",V),O();const t=a.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!0});if(t){const E=`#version 300 es
      void main(){vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));gl_Position=vec4(p*2.-1.,0.,1.);}`,N=`#version 300 es
precision highp float;
uniform vec2 frameSize;
uniform highp sampler3D gradientVolume;
uniform vec2 drift0, drift1, drift2, drift3;
uniform float lightStrength;
uniform bool moments;
out vec4 pixel;

vec3 volume(vec3 p) {
  vec3 v = texture(gradientVolume, p / 6.0).rgb;
  return vec3((v.r-0.5)*2.0,(v.gb-0.5)*4.0);
}
void main() {
  vec2 uv=gl_FragCoord.xy/frameSize;
  float aspect=frameSize.x/frameSize.y;
  vec2 p=(uv-vec2(0.49,0.51))*vec2(aspect,1.0);
  if(moments) p=mat2(0.90,0.435,-0.435,0.90)*vec2(p.x*0.86,p.y*0.82);
  // Use the derivative of a scalar potential to create a smooth rotational field.
  mat2 tilt=mat2(0.94,0.342,-0.342,0.94);
  vec3 potential=volume(vec3(tilt*p*1.45+vec2(1.35,2.10)+drift0.x*0.48,1.2+drift0.y));
  // Translate the entire field gently, with differential shear across the viewport.
  vec2 travel = vec2(0.38*drift0.x+0.14*drift1.y,0.22*drift0.y-0.12*drift2.x);
  vec2 q=p+travel+transpose(tilt)*vec2(potential.z,-potential.y)*(moments?0.11:0.20);
  // Two differently oriented slices make broad folds with continuous temporal evolution.
  vec3 primary=volume(vec3(q*1.30+vec2(3.15,0.72)+drift1.x*0.65,2.4+drift1.y));
  mat2 turn=mat2(0.83,0.56,-0.56,0.83);
  vec3 secondary=volume(vec3(turn*q*1.54+vec2(0.41,4.32)+drift2.x*0.57,4.3+drift2.y));
  q+=vec2(primary.x,secondary.x)*(moments?0.36:0.71);
  q+=vec2(secondary.z,-primary.y)*0.055;
  vec3 body=volume(vec3(tilt*q*1.24+vec2(2.35,3.12)+drift2.x*0.58,0.8+drift2.y));
  vec3 sheen=volume(vec3(turn*q*1.67+vec2(4.27,1.29)+drift3.x*0.70,3.7+drift3.y));
  float density=clamp(0.5+body.x*0.81+primary.x*0.20,0.0,1.0);
  float silk=clamp(0.5+sheen.x*0.92+secondary.x*0.12,0.0,1.0);
  float greenWeight=smoothstep(0.16,0.84,density+0.12*(silk-0.5));
  float luminous=smoothstep(0.36,0.88,silk)*smoothstep(0.21,0.76,density);
  float purpleWeight=smoothstep(0.30,0.78,0.5-secondary.x*0.8)*(1.0-0.65*greenWeight);
  vec3 midnight=vec3(8.,17.,23.)/255.0;
  vec3 emerald=vec3(30.,126.,93.)/255.0;
  vec3 mint=vec3(155.,231.,188.)/255.0;
  vec3 violet=vec3(91.,82.,155.)/255.0;
  vec3 color=mix(midnight,emerald,greenWeight*0.94);
  color=mix(color,mint,luminous*0.58);
  color=mix(color,violet,purpleWeight*0.13);
  // Lighting combines a broad environmental glow with highlights from the moving field.
  vec2 d=(uv-vec2(0.86,0.48))*vec2(aspect,1.0);
  float radius=dot(d,d);
  float diffuse=1.0/(1.0+3.2*radius);
  float inner=diffuse*diffuse;
  color+=vec3(0.056,0.089,0.14)*diffuse*lightStrength;
  color+=vec3(0.095,0.15,0.12)*inner*lightStrength;
  color+=mint*luminous*luminous*0.13;
  if(moments){
    // A warm photographic afterglow: charcoal, rosewood and restrained amber.
    vec3 dusk=vec3(24.,22.,23.)/255.;
    vec3 rosewood=vec3(92.,48.,44.)/255.;
    vec3 amber=vec3(178.,119.,74.)/255.;
    float cloud=smoothstep(0.18,0.84,density);
    float veil=smoothstep(0.34,0.88,silk);
    vec2 sky=(uv-vec2(0.80,0.82))*vec2(aspect,1.0);
    float glow=1.0/(1.0+2.6*dot(sky,sky));
    color=mix(dusk,rosewood,cloud*(0.25+0.58*glow));
    color=mix(color,amber,veil*glow*0.42);
    color+=vec3(0.07,0.042,0.021)*glow*lightStrength;
    color=mix(vec3(24./255.),color,0.93);
  }
  vec2 edge=uv-0.5;
  color*=1.0-0.30*smoothstep(0.12,0.49,dot(edge,edge));
  // Sub-visible spatial dither, no coarse noise grid.
  float dither=fract(dot(gl_FragCoord.xy,vec2(0.75487766,0.56984029)))-0.5;
  pixel=vec4(clamp(color+dither*0.0015,0.0,1.0),1.0);
}
`,$=(c,C)=>{const r=t.createShader(c);return t.shaderSource(r,C),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(console.warn(t.getShaderInfoLog(r)),t.deleteShader(r),null)},ee=$(t.VERTEX_SHADER,E),te=$(t.FRAGMENT_SHADER,N);if(ee&&te){const c=t.createProgram();if(t.attachShader(c,ee),t.attachShader(c,te),t.linkProgram(c),t.getProgramParameter(c,t.LINK_STATUS)){t.useProgram(c),t.bindVertexArray(t.createVertexArray());const C=t.getUniformLocation(c,"frameSize"),r=72,s=6,oe=r*r*r,f=new Float32Array(s*s*s*3);let u=1805115859;const re=()=>(u^=u<<13,u^=u>>>17,u^=u<<5,(u>>>0)/4294967296);for(let e=0;e<f.length;e+=3){const o=2*re()-1,i=2*Math.PI*re(),n=Math.sqrt(1-o*o);f[e]=n*Math.cos(i),f[e+1]=n*Math.sin(i),f[e+2]=o}const g=(e,o)=>(e+o)%o,pe=(e,o,i)=>3*(g(i,s)*s*s+g(o,s)*s+g(e,s)),G=e=>e*e*e*(e*(e*6-15)+10),v=(e,o,i)=>e+(o-e)*i,p=new Float32Array(oe),y=(e,o,i)=>g(i,r)*r*r+g(o,r)*r+g(e,r);for(let e=0;e<r;e++)for(let o=0;o<r;o++)for(let i=0;i<r;i++){const n=(i+.5)*s/r,h=(o+.5)*s/r,_=(e+.5)*s/r,L=Math.floor(n),ce=Math.floor(h),le=Math.floor(_),de=n-L,me=h-ce,fe=_-le,m=(ve,he,ge)=>{const Q=pe(L+ve,ce+he,le+ge);return f[Q]*(de-ve)+f[Q+1]*(me-he)+f[Q+2]*(fe-ge)},X=G(de),ue=G(me),Ee=G(fe),we=v(v(m(0,0,0),m(1,0,0),X),v(m(0,1,0),m(1,1,0),X),ue),Te=v(v(m(0,0,1),m(1,0,1),X),v(m(0,1,1),m(1,1,1),X),ue);p[y(i,o,e)]=v(we,Te,Ee)}const w=new Float32Array(oe*4),H=e=>Math.max(0,Math.min(1,e)),ie=r/(2*s);for(let e=0;e<r;e++)for(let o=0;o<r;o++)for(let i=0;i<r;i++){const n=y(i,o,e);w[4*n]=H(.5+p[n]*.76),w[4*n+1]=H(.5+.25*ie*(p[y(i+1,o,e)]-p[y(i-1,o,e)])),w[4*n+2]=H(.5+.25*ie*(p[y(i,o+1,e)]-p[y(i,o-1,e)])),w[4*n+3]=1}const ye=t.createTexture();t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_3D,ye),t.texImage3D(t.TEXTURE_3D,0,t.RGBA16F,r,r,r,0,t.RGBA,t.FLOAT,w),t.texParameteri(t.TEXTURE_3D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_3D,t.TEXTURE_MAG_FILTER,t.LINEAR);for(const e of[t.TEXTURE_WRAP_S,t.TEXTURE_WRAP_T,t.TEXTURE_WRAP_R])t.texParameteri(t.TEXTURE_3D,e,t.REPEAT);t.uniform1i(t.getUniformLocation(c,"gradientVolume"),0),t.uniform1i(t.getUniformLocation(c,"moments"),D?1:0);const xe=(D?[61,97,139,83]:[47,79,113,61]).map((e,o)=>({period:e,radius:[1.08,.92,1.14,.86][o],offset:[.3,1.15,2.1,.75][o],location:t.getUniformLocation(c,"drift"+o)})),ae=matchMedia("(hover: none), (pointer: coarse)").matches;t.uniform1f(t.getUniformLocation(c,"lightStrength"),ae?.65:1);const j=matchMedia("(prefers-reduced-motion: reduce)");let x=0,z=0,ne=0,T=0,M=!1,R=!0;const F=D?[{budget:8e4,fps:15},{budget:13e4,fps:20},{budget:2e5,fps:30}]:[{budget:1e5,fps:15},{budget:16e4,fps:20},{budget:25e4,fps:30}];let d=ae?1:2,b=0,U=0,k=0,S=0,I=0;const be=()=>{b=0,U=0,k=0,I=0,S=0},B=()=>{const e=Math.min(devicePixelRatio||1,1),o=a.clientWidth*e,i=a.clientHeight*e,n=F[d].budget,h=Math.min(1,1440/Math.max(o,1),Math.sqrt(n/Math.max(o*i,1))),_=Math.max(1,Math.round(o*h)),L=Math.max(1,Math.round(i*h));(a.width!==_||a.height!==L)&&(a.width=_,a.height=L),t.viewport(0,0,a.width,a.height),t.uniform2f(C,a.width,a.height)},q=()=>{if(!(M||!l()||!R||document.hidden)){for(const e of xe){const o=ne%e.period*2*Math.PI/e.period+e.offset;t.uniform2f(e.location,e.radius*(Math.sin(o)-Math.sin(e.offset)),e.radius*(Math.cos(e.offset)-Math.cos(o)))}a.dataset.fluidQuality!==String(d)&&(a.dataset.fluidQuality=String(d)),t.drawArrays(t.TRIANGLES,0,3),a.dataset.fluidReady!=="true"&&(a.style.opacity="1",a.dataset.fluidReady="true")}},se=e=>{if(!l()||document.hidden||j.matches||M||!R){x=0,T=0;return}const o=I?e-I:0;I=e,o>0&&o<500&&(b+=o,k++);const i=1e3/F[d].fps;if(e-z>=i-.5&&(ne+=T?Math.min((e-T)/1e3,.25):0,T=e,z=e,q(),U++),b>=1200){const n=U*1e3/b,h=k*1e3/b;S=n<F[d].fps*.86||h<F[d].fps*.95?S+1:0,b=0,U=0,k=0,S>=1&&d>0&&(d--,S=0,B(),q(),z=e)}x=requestAnimationFrame(se)},A=()=>{cancelAnimationFrame(x),x=0,T=0,z=0,be(),l()&&!document.hidden&&!M&&R&&(B(),q(),j.matches||(x=requestAnimationFrame(se)))};new IntersectionObserver(([e])=>{R=e.isIntersecting,A()}).observe(P),new ResizeObserver(()=>{l()&&R&&!document.hidden&&!M&&(B(),q())}).observe(a),new MutationObserver(()=>{O(),A()}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),document.addEventListener("visibilitychange",A),j.addEventListener("change",A),a.addEventListener("webglcontextlost",()=>{M=!0,cancelAnimationFrame(x),a.style.opacity="0"}),A()}}}},J=new MutationObserver(()=>{l()&&(Y(),J.disconnect())});l()?Y():J.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})}
