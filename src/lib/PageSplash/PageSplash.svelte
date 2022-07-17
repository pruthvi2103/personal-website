<script lang="ts">
import {pageSplashStyles,companyLinkStyles} from './PageSplash.styles.css'
import Highlight from '../atoms/highlight/Highlight.svelte'
import Subtitle from '../atoms/subtitle/Subtitle.svelte';
</script>
    
<section class={pageSplashStyles}>
    <h1>Hello, I am <Highlight>Pruthvi Shetty</Highlight></h1>
	<Subtitle>I love to tinker everything related to the web.
    Currently refining my craft at 
    <a class={companyLinkStyles} target="_blank" rel="noreferrer" href="https://www.antstack.io/">
    Antstack Inc
    </a>
    </Subtitle>
</section>
