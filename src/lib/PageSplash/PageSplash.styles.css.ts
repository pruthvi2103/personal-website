import { globalKeyframes, style } from '@vanilla-extract/css';
import { themeVars } from '../../styles/themes.css';
import { breakpoints } from '../../styles/tokens/breakpoints';

globalKeyframes('slideAppear', {
	'0%': {
		transform: 'translate(-32px, 0px)',
		opacity: 0
	},
	'100%': {
		transform: 'translate(0px, 0px)',
		opacity: 1
	}
});
export const pageSplashStyles = style({
	padding: '0 12px',
	animation: `1.5s slideAppear`,
	'@media': {
		[breakpoints.tablet]: {
			padding: '0 44px'
		}
	}
});

export const companyLinkStyles = style({
	textDecoration: 'none',
	color: themeVars.color.cyan,
	selectors: {
		'&:visited': {
			color: themeVars.color.cyan
		},
		'&:hover': {
			color: themeVars.color.cyan
		}
	}
});
