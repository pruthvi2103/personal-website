import { style } from '@vanilla-extract/css';
import { breakpoints } from '../../../styles/tokens/breakpoints';

export const spacerStyles = style({
	margin: '32px 0',
	'@media': {
		[breakpoints.tablet]: {
			margin: '120px 0'
		}
	}
});
