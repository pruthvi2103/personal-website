import { style } from '@vanilla-extract/css';
import { globalThemeVars, themeVars } from '../../styles/index.css';

export const headerStyles = style({
	display: 'flex',
	justifyContent: 'space-between',
	fontFamily: globalThemeVars.fonts.primary,
	padding: '22px 12px'
});
export const headerPre = style({
	fontSize: '32px',
	color: themeVars.color.text,
	margin: '0 12px'
});
export const indexLink = style({
	color: themeVars.color.text,
	textDecoration: 'none',
	':visited': {
		color: themeVars.color.text
	},
	':link': {
		color: themeVars.color.text
	}
});
