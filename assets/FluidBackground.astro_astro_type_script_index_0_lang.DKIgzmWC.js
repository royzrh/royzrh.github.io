var e=document.querySelector(`#home-fluid-canvas`);if(e){let t=()=>document.documentElement.classList.contains(`dark`),n=!1,r=()=>{if(n||!t())return;n=!0;let r=e.closest(`.fluid-backdrop`),i=r.dataset.fluidVariant===`moments`,a=matchMedia(`(prefers-reduced-motion: reduce)`),o=0,s=()=>{if(o=0,!t())return;let e=a.matches?0:Math.min(1,Math.max(0,window.scrollY/Math.max(r.clientHeight*.82,1))),n=e*e*(3-2*e);r.style.setProperty(`--fluid-scroll-opacity`,String(1-.65*n))},c=()=>{t()&&!o&&(o=requestAnimationFrame(s))};window.addEventListener(`scroll`,c,{passive:!0}),window.addEventListener(`resize`,c,{passive:!0}),a.addEventListener(`change`,c),s();let l=e.getContext(`webgl2`,{alpha:!1,antialias:!1,depth:!1,powerPreference:`low-power`,failIfMajorPerformanceCaveat:!0});if(l){let n=(e,t)=>{let n=l.createShader(e);return l.shaderSource(n,t),l.compileShader(n),l.getShaderParameter(n,l.COMPILE_STATUS)?n:(console.warn(l.getShaderInfoLog(n)),l.deleteShader(n),null)},a=n(l.VERTEX_SHADER,`#version 300 es
      void main(){vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));gl_Position=vec4(p*2.-1.,0.,1.);}`),o=n(l.FRAGMENT_SHADER,`#version 300 es
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
`);if(a&&o){let n=l.createProgram();if(l.attachShader(n,a),l.attachShader(n,o),l.linkProgram(n),l.getProgramParameter(n,l.LINK_STATUS)){l.useProgram(n),l.bindVertexArray(l.createVertexArray());let a=l.getUniformLocation(n,`frameSize`),o=373248,c=new Float32Array(648),u=0x6b97e1d3,d=()=>(u^=u<<13,u^=u>>>17,u^=u<<5,(u>>>0)/4294967296);for(let e=0;e<c.length;e+=3){let t=2*d()-1,n=2*Math.PI*d(),r=Math.sqrt(1-t*t);c[e]=r*Math.cos(n),c[e+1]=r*Math.sin(n),c[e+2]=t}let f=(e,t)=>(e+t)%t,p=(e,t,n)=>3*(f(n,6)*6*6+f(t,6)*6+f(e,6)),m=e=>e*e*e*(e*(e*6-15)+10),h=(e,t,n)=>e+(t-e)*n,g=new Float32Array(o),_=(e,t,n)=>f(n,72)*72*72+f(t,72)*72+f(e,72);for(let e=0;e<72;e++)for(let t=0;t<72;t++)for(let n=0;n<72;n++){let r=(n+.5)*6/72,i=(t+.5)*6/72,a=(e+.5)*6/72,o=Math.floor(r),s=Math.floor(i),l=Math.floor(a),u=r-o,d=i-s,f=a-l,v=(e,t,n)=>{let r=p(o+e,s+t,l+n);return c[r]*(u-e)+c[r+1]*(d-t)+c[r+2]*(f-n)},y=m(u),b=m(d),x=m(f),S=h(h(v(0,0,0),v(1,0,0),y),h(v(0,1,0),v(1,1,0),y),b),C=h(h(v(0,0,1),v(1,0,1),y),h(v(0,1,1),v(1,1,1),y),b);g[_(n,t,e)]=h(S,C,x)}let v=new Float32Array(o*4),y=e=>Math.max(0,Math.min(1,e));for(let e=0;e<72;e++)for(let t=0;t<72;t++)for(let n=0;n<72;n++){let r=_(n,t,e);v[4*r]=y(.5+g[r]*.76),v[4*r+1]=y(.5+1.5*(g[_(n+1,t,e)]-g[_(n-1,t,e)])),v[4*r+2]=y(.5+1.5*(g[_(n,t+1,e)]-g[_(n,t-1,e)])),v[4*r+3]=1}let b=l.createTexture();l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_3D,b),l.texImage3D(l.TEXTURE_3D,0,l.RGBA16F,72,72,72,0,l.RGBA,l.FLOAT,v),l.texParameteri(l.TEXTURE_3D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_3D,l.TEXTURE_MAG_FILTER,l.LINEAR);for(let e of[l.TEXTURE_WRAP_S,l.TEXTURE_WRAP_T,l.TEXTURE_WRAP_R])l.texParameteri(l.TEXTURE_3D,e,l.REPEAT);l.uniform1i(l.getUniformLocation(n,`gradientVolume`),0),l.uniform1i(l.getUniformLocation(n,`moments`),+!!i);let x=(i?[61,97,139,83]:[47,79,113,61]).map((e,t)=>({period:e,radius:[1.08,.92,1.14,.86][t],offset:[.3,1.15,2.1,.75][t],location:l.getUniformLocation(n,`drift`+t)})),S=matchMedia(`(hover: none), (pointer: coarse)`).matches;l.uniform1f(l.getUniformLocation(n,`lightStrength`),S?.65:1);let C=matchMedia(`(prefers-reduced-motion: reduce)`),w=0,T=0,E=0,D=0,O=!1,k=!0,A=i?[{budget:8e4,fps:15},{budget:13e4,fps:20},{budget:2e5,fps:30}]:[{budget:1e5,fps:15},{budget:16e4,fps:20},{budget:25e4,fps:30}],j=S?1:2,M=0,N=0,P=0,F=0,I=0,L=()=>{M=0,N=0,P=0,I=0,F=0},R=()=>{let t=Math.min(devicePixelRatio||1,1),n=e.clientWidth*t,r=e.clientHeight*t,i=A[j].budget,o=Math.min(1,1440/Math.max(n,1),Math.sqrt(i/Math.max(n*r,1))),s=Math.max(1,Math.round(n*o)),c=Math.max(1,Math.round(r*o));(e.width!==s||e.height!==c)&&(e.width=s,e.height=c),l.viewport(0,0,e.width,e.height),l.uniform2f(a,e.width,e.height)},z=()=>{if(!O&&t()&&k&&!document.hidden){for(let e of x){let t=E%e.period*2*Math.PI/e.period+e.offset;l.uniform2f(e.location,e.radius*(Math.sin(t)-Math.sin(e.offset)),e.radius*(Math.cos(e.offset)-Math.cos(t)))}e.dataset.fluidQuality!==String(j)&&(e.dataset.fluidQuality=String(j)),l.drawArrays(l.TRIANGLES,0,3),e.dataset.fluidReady!==`true`&&(e.style.opacity=`1`,e.dataset.fluidReady=`true`)}},B=e=>{if(!t()||document.hidden||C.matches||O||!k){w=0,D=0;return}let n=I?e-I:0;I=e,n>0&&n<500&&(M+=n,P++);let r=1e3/A[j].fps;if(e-T>=r-.5&&(E+=D?Math.min((e-D)/1e3,.25):0,D=e,T=e,z(),N++),M>=1200){let t=N*1e3/M,n=P*1e3/M;F=t<A[j].fps*.86||n<A[j].fps*.95?F+1:0,M=0,N=0,P=0,F>=1&&j>0&&(j--,F=0,R(),z(),T=e)}w=requestAnimationFrame(B)},V=()=>{cancelAnimationFrame(w),w=0,D=0,T=0,L(),t()&&!document.hidden&&!O&&k&&(R(),z(),C.matches||(w=requestAnimationFrame(B)))};new IntersectionObserver(([e])=>{k=e.isIntersecting,V()}).observe(r),new ResizeObserver(()=>{t()&&k&&!document.hidden&&!O&&(R(),z())}).observe(e),new MutationObserver(()=>{s(),V()}).observe(document.documentElement,{attributes:!0,attributeFilter:[`class`]}),document.addEventListener(`visibilitychange`,V),C.addEventListener(`change`,V),e.addEventListener(`webglcontextlost`,()=>{O=!0,cancelAnimationFrame(w),e.style.opacity=`0`}),V()}}}},i=new MutationObserver(()=>{t()&&(r(),i.disconnect())});t()?r():i.observe(document.documentElement,{attributes:!0,attributeFilter:[`class`]})}