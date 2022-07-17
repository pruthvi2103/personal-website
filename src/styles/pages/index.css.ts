import { style } from '@vanilla-extract/css';
import { themeVars } from '../themes.css';

export const bodyStyles = style({
	background: themeVars.color.background,
	display: 'flex',
	flexDirection: 'column',
	minHeight: '100vh'
});
export const mainStyles = style({
	flexGrow: '1'
});
