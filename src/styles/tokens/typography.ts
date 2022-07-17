import { modularScale } from "polished";

const baseFontSizeInPx = 16;
const fontEnlargementScale = 1.2;
const createScale = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}px`;

const fontSizeScale = createScale(fontEnlargementScale, baseFontSizeInPx);

export const fontSizeVars = {
  "0x": fontSizeScale(0),
  "1x": fontSizeScale(1),
  "2x": fontSizeScale(2),
  "3x": fontSizeScale(3),
  "4x": fontSizeScale(4),
  "5x": fontSizeScale(5),
  "6x": fontSizeScale(6),
  "7x": fontSizeScale(7),
  "8x": fontSizeScale(8),
  "9x": fontSizeScale(9),
};

export const fontVars = {
  primary: "'Manrope VF','Manrope','Poppins', sans-serif, system-ui",
};
