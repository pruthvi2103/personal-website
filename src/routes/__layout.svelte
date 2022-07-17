<script lang="ts">
import '../styles/reset.css'
import '../styles/fontface.css'

import {darkTheme} from '../styles/index.css'
import {bodyStyles,mainStyles} from '../styles/pages/index.css'
import Header from '$lib/Header/Header.svelte'
import Footer from '$lib/footer/Footer.svelte'
</script>


<div class={`${darkTheme} ${bodyStyles}`}>
	<Header/>
<main class={mainStyles}>
	<slot />
</main>

<Footer/>
</div>
<style>

</style>
