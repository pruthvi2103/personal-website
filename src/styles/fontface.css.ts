import { globalFontFace } from '@vanilla-extract/css';

globalFontFace('Manrope VF', {
	src: `url(/fonts/manrope/Manrope[wght].woff2) format('woff2-variations'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/814870/Venn_VF.woff2') format('woff2')`,
	fontDisplay: 'fallback',
	fontWeight: '300 800',
	fontStretch: '75 125'
});
globalFontFace('Manrope', {
	src: `url(/fonts/manrope/Manrope-Regular.woff2) format('woff2')`,
	fontDisplay: 'fallback'
});
globalFontFace('Manrope', {
	src: `url(/fonts/manrope/Manrope-Bold.woff2) format('woff2')`,
	fontDisplay: 'fallback',
	fontWeight: '700'
});
