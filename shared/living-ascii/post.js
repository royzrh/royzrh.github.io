// Strands are thin, so the scene renders into a 4× MSAA linear target first.
// 'flow' grades it (gamma, saturation, vignette, grain) onto the canvas;
// 'ascii' adds the direction pass and draws stroke glyphs instead.
import * as THREE from './three.module.min.js';
import { QUAD_VS } from './field.js';
import { AsciiStrokes } from './ascii.js';

const FINAL_FS = /* glsl */`
  uniform sampler2D tScene;
  uniform float uFrame;
  varying vec2 vUv;
  float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  void main() {
    vec3 c = pow(max(texture(tScene, vUv).rgb, 0.0), vec3(1.0 / 2.2));
    float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
    c = mix(vec3(l), c, 1.2) * 1.06;
    vec2 v = (vUv - 0.5) * vec2(1.15, 0.85);
    c *= 1.0 - 0.22 * pow(clamp(dot(v, v) * 2.4, 0.0, 1.0), 1.6);
    c += (hash(gl_FragCoord.xy + uFrame * 17.31) - 0.5) * 0.02;   // film grain
    gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
  }`;

export function makePost(renderer, W, H, field, natural = false, samples = 2, outputW = W, outputH = H) {
  const rt = new THREE.WebGLRenderTarget(W, H, { type: THREE.HalfFloatType, samples });
  const dirRT = new THREE.WebGLRenderTarget(W, H, { type: THREE.HalfFloatType });
  let ascii = new AsciiStrokes(renderer, outputW, outputH, {natural, photo:field.photo});
  const gl=renderer.getContext();
  const validate=target=>{
    renderer.setRenderTarget(target);
    if(gl.checkFramebufferStatus(gl.FRAMEBUFFER)!==gl.FRAMEBUFFER_COMPLETE){renderer.setRenderTarget(null);throw Error('ASCII framebuffer incomplete');}
  };
  validate(rt);validate(dirRT);validate(ascii.cellRT);renderer.setRenderTarget(null);
  const finalMat = new THREE.ShaderMaterial({
    uniforms: { tScene: { value: rt.texture }, uFrame: { value: 0 } },
    vertexShader: QUAD_VS, fragmentShader: FINAL_FS, depthTest: false, depthWrite: false,
  });
  const quadScene = new THREE.Scene();
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), finalMat);
  quad.frustumCulled = false;
  quadScene.add(quad);
  const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  return {
    rt,
    resizeOutput(w,h) {
      ascii.dispose();
      ascii=new AsciiStrokes(renderer,w,h,{natural,photo:field.photo});
      validate(ascii.cellRT);renderer.setRenderTarget(null);
    },
    renderScene(frame) {
      finalMat.uniforms.uFrame.value = frame % 997;
      renderer.setRenderTarget(rt);
      renderer.setClearColor(0x000000, 1);
      renderer.clear();
      renderer.render(field.scene, field.camera);
    },
    output(mode) {
      if (mode === 'ascii') {
        field.renderDirection(dirRT);
        ascii.render(rt.texture, dirRT.texture);
        return;
      }
      renderer.setRenderTarget(null);
      renderer.render(quadScene, cam);
    },
  };
}
