<script lang="ts">
import Subtitle from "$lib/atoms/subtitle/Subtitle.svelte";
import { projectCardWrapperStyles,neutralLink } from "./projectCard.styles.css";

export let projectData;
</script>
<a class={neutralLink} href={`/projects/${projectData.id}`}>
<div class={projectCardWrapperStyles}>
<h5>{projectData.title}</h5>
<Subtitle>
    {projectData.description}
</Subtitle>
</div>
</a>