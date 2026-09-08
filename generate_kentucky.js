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

function createSquareProductImage(srcPng, bounds, outPath, targetSize = 500, padding = 35) {
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
  console.log(`Generated: ${outPath} (crop [${minX}, ${minY}] to [${maxX}, ${maxY}] -> ${cropW}x${cropH})`);
}

const s1 = PNG.sync.read(fs.readFileSync('public/products/kentucky_raw/Screenshot 2026-09-07 121500.png'));
const s2 = PNG.sync.read(fs.readFileSync('public/products/kentucky_raw/Screenshot 2026-09-07 121528.png'));
const s3 = PNG.sync.read(fs.readFileSync('public/products/kentucky_raw/Screenshot 2026-09-07 121541.png'));

// Ensure output directory exists
if (!fs.existsSync('public/products/kentucky')) {
  fs.mkdirSync('public/products/kentucky', { recursive: true });
}

console.log('--- Generating All 10 Kentucky Mop Assets (Pixel Perfect) ---');

// 1. kentucky-cotton-white-loop.png (3 mops in s1)
const b1 = findTightBounds(s1, 138, 445, 90, 495);
createSquareProductImage(s1, b1, 'public/products/kentucky/kentucky-cotton-white-loop.png');

// 2. kentucky-cotton-white-cut.png (folded white mop in s1)
const b2 = findTightBounds(s1, 520, 830, 160, 490);
createSquareProductImage(s1, b2, 'public/products/kentucky/kentucky-cotton-white-cut.png');

// 3. kentucky-colored-cut.png (dark blue folded cut-end mop in s1)
const b3 = findTightBounds(s1, 880, 1190, 160, 490);
createSquareProductImage(s1, b3, 'public/products/kentucky/kentucky-colored-cut.png');

// 4. kentucky-colored-loop.png (blue flat loop-end mop in s1)
const b4 = findTightBounds(s1, 1240, 1540, 150, 490);
createSquareProductImage(s1, b4, 'public/products/kentucky/kentucky-colored-loop.png');

// 5. kentucky-polyester.png (grayish looped mop in s2)
const b5 = findTightBounds(s2, 15, 330, 10, 415);
createSquareProductImage(s2, b5, 'public/products/kentucky/kentucky-polyester.png');

// 6. kentucky-off-white-recycled.png (thick yarn off-white mops in s2)
const b6 = findTightBounds(s2, 370, 700, 10, 415);
createSquareProductImage(s2, b6, 'public/products/kentucky/kentucky-off-white-recycled.png');

// 7. kentucky-rayon-white-loop.png (bright white looped mop in s2, exclude border line at bottom)
const b7 = findTightBounds(s2, 740, 1060, 10, 350);
createSquareProductImage(s2, b7, 'public/products/kentucky/kentucky-rayon-white-loop.png');

// 8. kentucky-rayon-white-cut.png (white cut-end mop in s2)
const b8 = findTightBounds(s2, 1100, 1430, 10, 415);
createSquareProductImage(s2, b8, 'public/products/kentucky/kentucky-rayon-white-cut.png');

// 9. microfiber-kentucky-mop.png (light blue microfiber folded mop in s3)
const b9 = findTightBounds(s3, 30, 350, 85, 415);
createSquareProductImage(s3, b9, 'public/products/kentucky/microfiber-kentucky-mop.png');

// 10. microfiber-strip-mini-mop.png (3 mini mop heads: green, orange/red, blue in s3)
const b10 = findTightBounds(s3, 375, 705, 85, 415);
createSquareProductImage(s3, b10, 'public/products/kentucky/microfiber-strip-mini-mop.png');

console.log('All 10 products successfully regenerated to public/products/kentucky/');
