<script context="module" lang="ts">
	export const prerender = true;

</script>

<script lang="ts">
import Spacer from "$lib/atoms/spacer/Spacer.svelte";
import BlogsSection from "$lib/BlogsSection/BlogsSection.svelte";
import Container from "$lib/container/Container.svelte";
import PageSplash from "$lib/PageSplash/PageSplash.svelte";
import ProjectsSection from "$lib/ProjectsSection/ProjectsSection.svelte";
import WhatIDoSection from "$lib/WhatIDoSection/WhatIDoSection.svelte";


</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Container>
<PageSplash/>
<WhatIDoSection/>
</Container>
<Container>
	<Spacer/>
	<BlogsSection/>
	<Spacer/>
	<ProjectsSection/>
</Container>
<style></style>
