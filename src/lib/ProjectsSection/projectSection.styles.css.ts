import { style } from '@vanilla-extract/css';
import { globalThemeVars, themeVars } from '../../styles/index.css';

import { breakpoints } from '../../styles/tokens/breakpoints';
export const projectsFlex = style({
	display: 'flex',
	flexWrap: 'wrap',
	gap: '12px',
	margin: '12px 0',
	'@media': {
		[breakpoints.tablet]: {
			margin: '18px 0'
		}
	}
});
export const viewAllLink = style({
	textDecoration: 'none',
	fontSize: globalThemeVars.fontSizes['2x'],
	fontWeight: 300,
	display: 'flex',
	gap: '8px',
	justifyContent: 'center',
	alignItems: 'center',
	color: 'inherit',
	transition: 'all 0.4s ease 0s',
	borderBottom: `1px solid ${themeVars.color.background}`,
	':hover': {
		borderColor: `${themeVars.color.red}`,
		gap: '16px',
		transform: 'translate(0, -6px)',
		transition: 'all 0.75s ease 0s'
	}
});
export const viewAllParagraph = style({
	display: 'inline-block'
});
