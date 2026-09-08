import fs from 'fs';
import { PNG } from 'pngjs';

function isNonWhite(r, g, b, a, threshold = 245) {
  if (a < 50) return false;
  return r < threshold || g < threshold || b < threshold;
}

function findTightBounds(srcPng, xMin, xMax, yMin, yMax, threshold = 245) {
  let minX = xMax, maxX = xMin, minY = yMax, maxY = yMin;
  for (let y = yMin; y <= yMax; y++) {
    for (let x = xMin; x <= xMax; x++) {
      const idx = (srcPng.width * y + x) << 2;
      const r = srcPng.data[idx];
      const g = srcPng.data[idx + 1];
      const b = srcPng.data[idx + 2];
      const a = srcPng.data[idx + 3];
      if (isNonWhite(r, g, b, a, threshold)) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  return { minX, maxX, minY, maxY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

function createSquareProductImage(srcPng, bounds, outPath, targetSize = 500, padding = 40) {
  const { minX, maxX, minY, maxY } = bounds;
  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;
  
  const availSize = targetSize - (padding * 2);
  const scale = Math.min(availSize / cropW, availSize / cropH);
  
  const scaledW = Math.round(cropW * scale);
  const scaledH = Math.round(cropH * scale);
  
  const offsetX = Math.round((targetSize - scaledW) / 2);
  const offsetY = Math.round((targetSize - scaledH) / 2);
  
  const dst = new PNG({ width: targetSize, height: targetSize });
  
  // Fill with pure white #FFFFFF
  for (let i = 0; i < dst.data.length; i += 4) {
    dst.data[i] = 255;
    dst.data[i + 1] = 255;
    dst.data[i + 2] = 255;
    dst.data[i + 3] = 255;
  }
  
  for (let dy = 0; dy < scaledH; dy++) {
    for (let dx = 0; dx < scaledW; dx++) {
      const srcX = Math.min(minX + Math.floor(dx / scale), maxX);
      const srcY = Math.min(minY + Math.floor(dy / scale), maxY);
      
      const srcIdx = (srcPng.width * srcY + srcX) << 2;
      const dstIdx = (targetSize * (offsetY + dy) + (offsetX + dx)) << 2;
      
      const r = srcPng.data[srcIdx];
      const g = srcPng.data[srcIdx + 1];
      const b = srcPng.data[srcIdx + 2];
      const a = srcPng.data[srcIdx + 3];
      
      // If near-white in source, keep pure white
      if (r > 248 && g > 248 && b > 248) {
        dst.data[dstIdx] = 255;
        dst.data[dstIdx + 1] = 255;
        dst.data[dstIdx + 2] = 255;
        dst.data[dstIdx + 3] = 255;
      } else {
        dst.data[dstIdx] = r;
        dst.data[dstIdx + 1] = g;
        dst.data[dstIdx + 2] = b;
        dst.data[dstIdx + 3] = a;
      }
    }
  }
  
  fs.writeFileSync(outPath, PNG.sync.write(dst));
  console.log(`Exported ${outPath}: crop [${minX}, ${minY}] to [${maxX}, ${maxY}] (${cropW}x${cropH})`);
}

const b1 = PNG.sync.read(fs.readFileSync('public/products/best-selling-1.png'));
const b2 = PNG.sync.read(fs.readFileSync('public/products/best-selling-2.png'));

// 1. Spray Mop (start y below header text y=90)
const b_spray = findTightBounds(b1, 140, 485, 110, 495);
createSquareProductImage(b1, b_spray, 'public/products/spray-mop.png');

// 2. Spin Mop Set
const b_spin = findTightBounds(b1, 517, 835, 120, 480);
createSquareProductImage(b1, b_spin, 'public/products/spin-mop.png');

// 3. Microfiber Dust Mop
const b_microfiber = findTightBounds(b1, 869, 1215, 120, 485);
createSquareProductImage(b1, b_microfiber, 'public/products/microfiber-dust-mop.png');

// 4. Self Wringing Mop (exclude the + button by setting xMax=1495, yMax=450)
const b_self_wring = findTightBounds(b1, 1266, 1495, 145, 450);
createSquareProductImage(b1, b_self_wring, 'public/products/self-wringing-mop.png');

// 5. Aluminum Handle (b1)
const b_aluminum = findTightBounds(b1, 1605, 1726, 110, 480);
createSquareProductImage(b1, b_aluminum, 'public/products/aluminum-handle.png');

// 6. Clamp Handle (b2)
const b_clamp = findTightBounds(b2, 88, 280, 110, 465);
createSquareProductImage(b2, b_clamp, 'public/products/clamp-handle.png');

// 7. Iron Handle (b2)
const b_iron = findTightBounds(b2, 333, 650, 150, 445);
createSquareProductImage(b2, b_iron, 'public/products/iron-handle.png');

// 8. Mini Mop (b2)
const b_mini = findTightBounds(b2, 703, 1008, 160, 420);
createSquareProductImage(b2, b_mini, 'public/products/mini-mop.png');

// 9. Colored Grip Handle (b2)
const b_colored_grip = findTightBounds(b2, 1085, 1306, 80, 514);
createSquareProductImage(b2, b_colored_grip, 'public/products/colored-grip-handle.png');

// 10. Floor Brush (b2, exclude bottom card border line at y=472)
const b_floor_brush = findTightBounds(b2, 1412, 1757, 120, 465);
createSquareProductImage(b2, b_floor_brush, 'public/products/floor-brush.png');
