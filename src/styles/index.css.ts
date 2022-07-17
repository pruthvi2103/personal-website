import { createGlobalTheme } from '@vanilla-extract/css';
import { fontSizeVars, fontVars } from './tokens';

export const globalThemeVars = createGlobalTheme(':root', {
	fonts: fontVars,
	fontSizes: fontSizeVars
});
export * from './themes.css';
