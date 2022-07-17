import { style } from '@vanilla-extract/css';
import { breakpoints } from '../../styles/tokens/breakpoints';

export const footerStyles = style({
	padding: '45px 0',
	'@media': {
		[breakpoints.tablet]: {
			padding: '45px'
		}
	}
});
export const socialsContainerStyles = style({
	display: 'flex',
	gap: '12px',
	marginTop: '14px'
});
