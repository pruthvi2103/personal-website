import { style } from '@vanilla-extract/css';
import { breakpoints } from '../../styles/tokens/breakpoints';
import { themeVars } from '../../styles/themes.css';

export const blogCardWrapperStyles = style({
	padding: '12px 18px',
	cursor: 'pointer', // border: `1px solid ${themeVars.color.text}`,
	borderBottom: `1px solid ${themeVars.color.text}`,
	'@media': {
		[breakpoints.laptop]: {
			padding: '24px'
		}
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
export const dateAndViewsSection = style({
	display: 'flex',
	flexDirection: 'row-reverse',
	justifyContent: 'space-between'
});
