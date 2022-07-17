import { keyframes, style } from '@vanilla-extract/css';
import { globalThemeVars } from '../../styles/index.css';
import { themeVars } from '../../styles/themes.css';
import { breakpoints } from '../../styles/tokens/breakpoints';

export const whatIDoStyles = style({
	opacity: '0',
	padding: '0 12px',
	animation: `1.5s slideAppear`,
	animationDelay: '0.5s',
	animationFillMode: 'forwards',
	marginTop: '48px',
	'@media': {
		[breakpoints.tablet]: {
			padding: '0 44px',
			marginTop: '64px'
		}
	}
});

const rotate = keyframes({
	'0%': { opacity: '0' },
	'50%': { opacity: '1' },
	'100%': { opacity: '0' }
});

export const activeBlink = style({
	height: '12px',
	width: '12px',
	animation: `3s infinite ${rotate}`,
	display: 'inline-block',
	background: themeVars.color.red,
	borderRadius: '50%'
});

export const whatIDoParaStyles = style({
	fontWeight: '400'
});
