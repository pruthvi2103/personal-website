import { createTheme, createThemeContract } from "@vanilla-extract/css";
import { darkColors } from "./tokens/colors";

export const themeVars = createThemeContract({
  color: {
    ...darkColors,
  },
});
export const darkTheme = createTheme(themeVars, {
  color: {
    ...darkColors,
  },
});
