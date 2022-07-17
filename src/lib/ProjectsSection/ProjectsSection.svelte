<script lang="ts">
import Highlight from "$lib/atoms/highlight/Highlight.svelte";
import Subtitle from "$lib/atoms/subtitle/Subtitle.svelte";
import { pageSplashStyles } from "$lib/PageSplash/PageSplash.styles.css";
import ProjectCard from "$lib/ProjectCard/ProjectCard.svelte";
import RightArrow from "$lib/svg/RightArrow.svelte";
import { projectsFlex,viewAllLink, viewAllParagraph } from "./projectSection.styles.css";
import projectData from '../../data/projects.json'

</script>

<section class={pageSplashStyles}>
    <h2>Projects</h2>
   <Subtitle>Take a look at some of my projects</Subtitle>
   <div class={projectsFlex}>
   {#each projectData as project}
   <ProjectCard projectData={project} />
   {/each}

</div>
<p  class={viewAllParagraph}>
    <Highlight> <a class={viewAllLink} href="/">View All <RightArrow/> </a></Highlight>
   </p>
</section>