import { globalStyle, style } from '@vanilla-extract/css';
import { globalThemeVars } from '../styles/index.css';
import { themeVars } from '../styles/themes.css';
import { breakpoints } from '../styles/tokens/breakpoints';

export const projectBlogStyles = style({
	maxWidth: '1024px',
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
export const coverImage = style({
	objectFit: 'cover'
});
export const postTitle = style({});
export const detailCardWrapper = style({
	display: 'flex',
	gap: '8px',
	justifyContent: 'space-between',
	alignItems: 'center',
	margin: '12px 0'
});
export const blogDivider = style({
	borderBottom: `1px solid ${themeVars.color.text}`
});
globalStyle(`${projectBlogStyles} > p > a`, {
	color: `${themeVars.color.red} !important`
});
globalStyle(`${projectBlogStyles} > p > a[target=_blank]`, {
	color: `${themeVars.color.purple} !important`
});

globalStyle(`${projectBlogStyles} > p`, {
	lineHeight: '200%',
	margin: '12px 0'
});
globalStyle(`${projectBlogStyles} > h3`, {
	margin: '22px 0'
});
globalStyle(`${projectBlogStyles} > p > code`, {
	color: themeVars.color.orange
});
