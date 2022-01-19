exports.draw = (startX, startY, endX, endY, step = 1) => {
  const outputArray = [];
  const dx = endX - startX;
  const dy = endY - startY;
  const adx = (Math.abs(dx) + step) * 2;
  const ady = (Math.abs(dy) + step) * 2;
  const sx = dx > 0 ? step : -step;
  const sy = dy > 0 ? step : -step;
  if (adx > ady) {
    let eps = (ady - adx) / 2;
    for (let x = startX, y = startY; sx < 0 ? x >= endX : x <= endX; x += sx) {
      outputArray.push({ x, y });
      eps += ady;
      if (eps * 2 >= adx) {
        y += sy;
        eps -= adx;
      }
    }
  } else {
    let eps = (adx - ady) / 2;
    for (let x = startX, y = startY; sy < 0 ? y >= endY : y <= endY; y += sy) {
      outputArray.push({ x, y });
      eps += adx;
      if (eps * 2 >= ady) {
        x += sx;
        eps -= ady;
      }
    }
  }
  return outputArray;
};
