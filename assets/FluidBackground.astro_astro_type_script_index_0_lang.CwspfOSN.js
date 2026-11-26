const a=document.querySelector("#home-fluid-canvas");if(a){const l=()=>document.documentElement.classList.contains("dark");let Q=!1;const K=()=>{if(Q||!l())return;Q=!0;const k=a.closest(".fluid-backdrop"),J=matchMedia("(prefers-reduced-motion: reduce)");let D=0;const W=()=>{if(D=0,!l())return;const T=J.matches?0:Math.min(1,Math.max(0,window.scrollY/Math.max(k.clientHeight*.82,1))),V=T*T*(3-2*T);k.style.setProperty("--fluid-scroll-opacity",String(1-.65*V))},O=()=>{l()&&!D&&(D=requestAnimationFrame(W))};window.addEventListener("scroll",O,{passive:!0}),window.addEventListener("resize",O,{passive:!0}),J.addEventListener("change",O),W();const t=a.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!0});if(t){const T=`#version 300 es
      void main(){vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));gl_Position=vec4(p*2.-1.,0.,1.);}`,V=`#version 300 es
precision highp float;
uniform vec2 frameSize;
uniform highp sampler3D gradientVolume;
uniform vec2 drift0, drift1, drift2, drift3;
uniform float lightStrength;
out vec4 pixel;

vec3 volume(vec3 p) {
  vec3 v = texture(gradientVolume, p / 6.0).rgb;
  return vec3((v.r-0.5)*2.0,(v.gb-0.5)*4.0);
}
void main() {
  vec2 uv=gl_FragCoord.xy/frameSize;
  float aspect=frameSize.x/frameSize.y;
  vec2 p=(uv-vec2(0.49,0.51))*vec2(aspect,1.0);
  // Use the derivative of a scalar potential to create a smooth rotational field.
  mat2 tilt=mat2(0.94,0.342,-0.342,0.94);
  vec3 potential=volume(vec3(tilt*p*1.45+vec2(1.35,2.10)+drift0.x*0.48,1.2+drift0.y));
  // Translate the entire field gently, with differential shear across the viewport.
  vec2 travel = vec2(0.38*drift0.x+0.14*drift1.y,0.22*drift0.y-0.12*drift2.x);
  vec2 q=p+travel+transpose(tilt)*vec2(potential.z,-potential.y)*0.20;
  // Two differently oriented slices make broad folds with continuous temporal evolution.
  vec3 primary=volume(vec3(q*1.30+vec2(3.15,0.72)+drift1.x*0.65,2.4+drift1.y));
  mat2 turn=mat2(0.83,0.56,-0.56,0.83);
  vec3 secondary=volume(vec3(turn*q*1.54+vec2(0.41,4.32)+drift2.x*0.57,4.3+drift2.y));
  q+=vec2(primary.x,secondary.x)*0.71;
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
  vec2 edge=uv-0.5;
  color*=1.0-0.30*smoothstep(0.12,0.49,dot(edge,edge));
  // Sub-visible spatial dither, no coarse noise grid.
  float dither=fract(dot(gl_FragCoord.xy,vec2(0.75487766,0.56984029)))-0.5;
  pixel=vec4(clamp(color+dither*0.0015,0.0,1.0),1.0);
}
`,Z=(c,N)=>{const o=t.createShader(c);return t.shaderSource(o,N),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(console.warn(t.getShaderInfoLog(o)),t.deleteShader(o),null)},$=Z(t.VERTEX_SHADER,T),ee=Z(t.FRAGMENT_SHADER,V);if($&&ee){const c=t.createProgram();if(t.attachShader(c,$),t.attachShader(c,ee),t.linkProgram(c),t.getProgramParameter(c,t.LINK_STATUS)){t.useProgram(c),t.bindVertexArray(t.createVertexArray());const N=t.getUniformLocation(c,"frameSize"),o=72,s=6,te=o*o*o,m=new Float32Array(s*s*s*3);let u=1805115859;const re=()=>(u^=u<<13,u^=u>>>17,u^=u<<5,(u>>>0)/4294967296);for(let e=0;e<m.length;e+=3){const r=2*re()-1,i=2*Math.PI*re(),n=Math.sqrt(1-r*r);m[e]=n*Math.cos(i),m[e+1]=n*Math.sin(i),m[e+2]=r}const g=(e,r)=>(e+r)%r,ge=(e,r,i)=>3*(g(i,s)*s*s+g(r,s)*s+g(e,s)),C=e=>e*e*e*(e*(e*6-15)+10),h=(e,r,i)=>e+(r-e)*i,p=new Float32Array(te),x=(e,r,i)=>g(i,o)*o*o+g(r,o)*o+g(e,o);for(let e=0;e<o;e++)for(let r=0;r<o;r++)for(let i=0;i<o;i++){const n=(i+.5)*s/o,v=(r+.5)*s/o,_=(e+.5)*s/o,L=Math.floor(n),se=Math.floor(v),ce=Math.floor(_),le=n-L,de=v-se,fe=_-ce,f=(ue,he,ve)=>{const B=ge(L+ue,se+he,ce+ve);return m[B]*(le-ue)+m[B+1]*(de-he)+m[B+2]*(fe-ve)},X=C(le),me=C(de),Ee=C(fe),Te=h(h(f(0,0,0),f(1,0,0),X),h(f(0,1,0),f(1,1,0),X),me),be=h(h(f(0,0,1),f(1,0,1),X),h(f(0,1,1),f(1,1,1),X),me);p[x(i,r,e)]=h(Te,be,Ee)}const b=new Float32Array(te*4),G=e=>Math.max(0,Math.min(1,e)),oe=o/(2*s);for(let e=0;e<o;e++)for(let r=0;r<o;r++)for(let i=0;i<o;i++){const n=x(i,r,e);b[4*n]=G(.5+p[n]*.76),b[4*n+1]=G(.5+.25*oe*(p[x(i+1,r,e)]-p[x(i-1,r,e)])),b[4*n+2]=G(.5+.25*oe*(p[x(i,r+1,e)]-p[x(i,r-1,e)])),b[4*n+3]=1}const pe=t.createTexture();t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_3D,pe),t.texImage3D(t.TEXTURE_3D,0,t.RGBA16F,o,o,o,0,t.RGBA,t.FLOAT,b),t.texParameteri(t.TEXTURE_3D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_3D,t.TEXTURE_MAG_FILTER,t.LINEAR);for(const e of[t.TEXTURE_WRAP_S,t.TEXTURE_WRAP_T,t.TEXTURE_WRAP_R])t.texParameteri(t.TEXTURE_3D,e,t.REPEAT);t.uniform1i(t.getUniformLocation(c,"gradientVolume"),0);const xe=[47,79,113,61].map((e,r)=>({period:e,radius:[1.08,.92,1.14,.86][r],offset:[.3,1.15,2.1,.75][r],location:t.getUniformLocation(c,"drift"+r)})),ie=matchMedia("(hover: none), (pointer: coarse)").matches;t.uniform1f(t.getUniformLocation(c,"lightStrength"),ie?.65:1);const H=matchMedia("(prefers-reduced-motion: reduce)");let y=0,P=0,ae=0,M=0,w=!1,R=!0;const z=[{budget:1e5,fps:15},{budget:16e4,fps:20},{budget:25e4,fps:30}];let d=ie?1:2,E=0,F=0,U=0,S=0,I=0;const ye=()=>{E=0,F=0,U=0,I=0,S=0},j=()=>{const e=Math.min(devicePixelRatio||1,1),r=a.clientWidth*e,i=a.clientHeight*e,n=z[d].budget,v=Math.min(1,1440/Math.max(r,1),Math.sqrt(n/Math.max(r*i,1))),_=Math.max(1,Math.round(r*v)),L=Math.max(1,Math.round(i*v));(a.width!==_||a.height!==L)&&(a.width=_,a.height=L),t.viewport(0,0,a.width,a.height),t.uniform2f(N,a.width,a.height)},q=()=>{if(!(w||!l()||!R||document.hidden)){for(const e of xe){const r=ae%e.period*2*Math.PI/e.period+e.offset;t.uniform2f(e.location,e.radius*(Math.sin(r)-Math.sin(e.offset)),e.radius*(Math.cos(e.offset)-Math.cos(r)))}a.dataset.fluidQuality!==String(d)&&(a.dataset.fluidQuality=String(d)),t.drawArrays(t.TRIANGLES,0,3),a.dataset.fluidReady!=="true"&&(a.style.opacity="1",a.dataset.fluidReady="true")}},ne=e=>{if(!l()||document.hidden||H.matches||w||!R){y=0,M=0;return}const r=I?e-I:0;I=e,r>0&&r<500&&(E+=r,U++);const i=1e3/z[d].fps;if(e-P>=i-.5&&(ae+=M?Math.min((e-M)/1e3,.25):0,M=e,P=e,q(),F++),E>=1200){const n=F*1e3/E,v=U*1e3/E;S=n<z[d].fps*.86||v<z[d].fps*.95?S+1:0,E=0,F=0,U=0,S>=1&&d>0&&(d--,S=0,j(),q(),P=e)}y=requestAnimationFrame(ne)},A=()=>{cancelAnimationFrame(y),y=0,M=0,P=0,ye(),l()&&!document.hidden&&!w&&R&&(j(),q(),H.matches||(y=requestAnimationFrame(ne)))};new IntersectionObserver(([e])=>{R=e.isIntersecting,A()}).observe(k),new ResizeObserver(()=>{l()&&R&&!document.hidden&&!w&&(j(),q())}).observe(a),new MutationObserver(()=>{W(),A()}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),document.addEventListener("visibilitychange",A),H.addEventListener("change",A),a.addEventListener("webglcontextlost",()=>{w=!0,cancelAnimationFrame(y),a.style.opacity="0"}),A()}}}},Y=new MutationObserver(()=>{l()&&(K(),Y.disconnect())});l()?K():Y.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})}
