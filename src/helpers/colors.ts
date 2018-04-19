import { hashCode } from './hash';

const GOLDEN_RATIO_CONJUGATE = 0.618033988749895;




export function hsvToRgb(hue: number, saturation: number, value: number) {
  // Make sure HSV values are correct
  if (hue > 360) {
    hue = 360;
  } else if (hue < 0) {
    hue = 0;
  }
  if (saturation > 1) {
    saturation = 1;
  } else if (saturation < 0) {
    saturation = 0;
  }
  if (value > 1) {
    value = 1;
  } else if (value < 0) {
    value = 0;
  }

  // Get Chroma, H', and X
  const c = value * saturation;
  const h = hue / 60;
  const x = c * (1 - Math.abs(h % 2 - 1));
  let rgb = [0, 0, 0];

  // Find the initial RGB values
  if (0 <= h && h <= 1) {
    rgb = [c, x, 0];
  } else if (1 <= h && h <= 2) {
    rgb = [x, c, 0];
  } else if (2 <= h && h <= 3) {
    rgb = [0, c, x];
  } else if (3 <= h && h <= 4) {
    rgb = [0, x, c];
  } else if (4 <= h && h <= 5) {
    rgb = [x, 0, c];
  } else if (5 <= h && h <= 6) {
    rgb = [c, 0, x];
  }

  // Now we match value
  const m = value - c;

  rgb = rgb.map(v => {
    return Math.floor((v + m) * 255);
  });

  return rgb;
}

export function getRandomColor(saturation = 0.5, value = 0.95) {
  let hue = Math.random();
  hue += GOLDEN_RATIO_CONJUGATE;
  hue %= 1;
  hue = hue * 360;
  const [r, g, b] = hsvToRgb(hue, saturation, value);
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);

  return `#${red}${green}${blue}`;
}

export function getColorFromString(inputString: string) {
  const stringHue = hashCode(inputString) % 360;
  const [r, g, b] = hsvToRgb(stringHue, 0.5, 0.95);
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);

  return `#${red}${green}${blue}`;
}

function rgbToHex(value: number) {
  let hex = Number(value).toString(16);
  if (hex.length < 0) {
    hex = '0' + hex;
  }

  return hex;
}
