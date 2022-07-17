import { style } from '@vanilla-extract/css';
import { themeVars } from '../../styles/themes.css';

export const cardWrapper = style({
	padding: '12px',
	background: themeVars.color.foreground,
	borderRadius: '8px',
	minWidth: '150px'
});
export const repoLink = style({
	display: 'flex',
	gap: '6px',
	alignItems: 'center',
	textDecoration: 'none',
	color: themeVars.color.text,
	':visited': {
		color: themeVars.color.text,
		textDecoration: 'none'
	},
	':link': {
		color: themeVars.color.text,
		textDecoration: 'none'
	}
});
export const repoHeading = style({
	transition: '1s ease',
	':hover': {
		fontWeight: 900,
		textDecoration: 'underline'
	}
});
export const githubStarIcon = style({
	color: themeVars.color.text
});
