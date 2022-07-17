import { style } from '@vanilla-extract/css';
import { breakpoints } from '../../styles/tokens/breakpoints';
import { themeVars } from '../../styles/themes.css';

export const projectCardWrapperStyles = style({
	background: themeVars.color.foreground,
	borderRadius: '16px',
	padding: '12px 18px',
	maxWidth: '480px',
	cursor: 'pointer', // border: `1px solid ${themeVars.color.text}`,
	'@media': {
		[breakpoints.laptop]: {
			padding: '24px'
		}
	},
	transition: 'all 0.75s ease 0.2s',
	':hover': {
		transform: 'translate(0px, -10px)'
	}
});

export const neutralLink = style({
	color: 'unset',
	textDecoration: 'none',
	':visited': {
		color: 'unset',
		textDecoration: 'none'
	},
	':link': {
		color: 'unset',
		textDecoration: 'none'
	}
});
