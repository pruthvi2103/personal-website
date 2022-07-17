import { globalStyle } from '@vanilla-extract/css';
import { globalThemeVars } from './index.css';
/* CSS Reset */
/* Box sizing rules */
globalStyle('*,*::before,*::after', {
	boxSizing: 'border-box',
	'@media': {
		'prefers-reduced-motion: reduce': {
			animationDuration: '0.01ms !important',
			animationIterationCount: '1 !important',
			transitionDuration: '0.01ms !important',
			scrollBehavior: 'auto !important' as 'auto'
		}
	}
});

/* Remove default margin */
globalStyle('body,h1,h2,h3,h4,h5,h6,p,figure,blockquote,dl,dd', {
	margin: 0
});
globalStyle('h1', {
	fontSize: globalThemeVars.fontSizes['6x']
});
globalStyle('h2', {
	fontSize: globalThemeVars.fontSizes['5x']
});
globalStyle('h3', {
	fontSize: globalThemeVars.fontSizes['4x']
});
globalStyle('h4', {
	fontSize: globalThemeVars.fontSizes['3x']
});
globalStyle('h5', {
	fontSize: globalThemeVars.fontSizes['2x']
});
globalStyle('h6', {
	fontSize: globalThemeVars.fontSizes['1x']
});
globalStyle('p', {
	fontSize: globalThemeVars.fontSizes['1x']
});
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
globalStyle(`ul[role='list'],ol[role='list']`, {
	listStyle: 'none'
});

/* Set core root defaults */
globalStyle(`html:focus-within`, {
	scrollBehavior: 'smooth'
});

/* Set core body defaults */
globalStyle(`body`, {
	fontFamily: globalThemeVars.fonts.primary,
	minHeight: '100vh',
	textRendering: 'optimizeSpeed',
	lineHeight: '1.5'
});

/* A elements that don't have a class get default styles */
globalStyle(`a:not([class])`, {
	textDecorationSkipInk: 'auto'
});

/* Make images easier to work with */
globalStyle(`img,picture`, {
	maxWidth: '100%',
	display: 'block'
});
/* Inherit fonts for inputs and buttons */
globalStyle(`input,button,textarea,select`, {
	font: 'inherit'
});
globalStyle(`html, body, #root`, {
	height: '100%'
});
globalStyle(`iframe`, {
	maxWidth: '100%'
});
globalStyle(`html:focus-within`, {
	'@media': {
		'prefers-reduced-motion: reduce': {
			scrollBehavior: 'auto'
		}
	}
});
