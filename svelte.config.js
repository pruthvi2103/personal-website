import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { imagetools } from 'vite-imagetools';
import { mdsvex } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['md', 'svx'],
			layout: {
				blog: './src/layouts/blog.svelte',
				project: './src/layouts/project.svelte'
			},
			rehypePlugins: [
				[rehypeExternalLinks, { target: '_blank' }],
				[rehypePrismPlus, { ignoreMissing: true }],
				[rehypeSlug],
				[rehypeAutolinkHeadings]
			]
		})
	],

	kit: {
		adapter: adapter(),
		vite: {
			define: {
				'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString())
			},
			plugins: [vanillaExtractPlugin(), imagetools({ force: true })],
			ssr:
				process.env.NODE_ENV === 'development'
					? {}
					: {
							noExternal: ['@vanilla-extract/css', '@vanilla-extract/css/fileScope']
					  }
		}
	}
};

export default config;
