import { style } from '@vanilla-extract/css';
import { themeVars } from '../../styles/themes.css';
import { breakpoints } from '../../styles/tokens/breakpoints';

export const containerStyles = style({
	maxWidth: '1100px',
	minWidth: '320px',
	padding: '30px',
	margin: '0 auto',

	color: themeVars.color.text,
	minHeight: '100%',
	'@media': {
		[breakpoints.tablet]: {
			padding: 'unset'
		}
	}
});
