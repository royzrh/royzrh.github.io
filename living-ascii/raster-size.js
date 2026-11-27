// Separate the inexpensive scene raster from the display-sized glyph raster.
// One output pixel per CSS pixel avoids oversized 5x7 cells on tablets/desktops.
// Limit pixel work on very large monitors without multiplying by devicePixelRatio.
export function rasterSizes(width,height,snow,coarse){
  const w=Math.max(2,Math.round(width)||2),h=Math.max(2,Math.round(height)||2);
  const sceneW=snow?(coarse?400:768):(coarse?448:864);
  const sceneH=snow?(coarse?800:720):(coarse?896:810);
  const sceneScale=Math.min(1,sceneW/w,sceneH/h);
  const outputScale=Math.min(1,2560/Math.max(w,h),Math.sqrt(2400000/(w*h)));
  const even=n=>Math.max(2,Math.floor(n/2)*2);
  return {W:even(w*sceneScale),H:even(h*sceneScale),outputW:even(w*outputScale),outputH:even(h*outputScale)};
}
