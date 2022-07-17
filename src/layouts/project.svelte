<script lang="ts">
import { highlightVariants } from "$lib/atoms/highlight/Highlight.data";


import Highlight from "$lib/atoms/highlight/Highlight.svelte";
import Subtitle from "$lib/atoms/subtitle/Subtitle.svelte";
import { repoLink } from "$lib/GithubCard/GithubCard.styles.css";
import GitHubCard from "$lib/GithubCard/GitHubCard.svelte";
import { activeBlink } from "$lib/WhatIDoSection/whatIDoSection.styles.css";
import { projectBlogStyles,postTitle,coverImage, detailCardWrapper } from "./project.styles.css";
export let projectData;
export let projectGithubRepoData;
</script>

<section class={projectBlogStyles}>
    {#if projectData.coverUrl} 
    <img class={coverImage} width="100%" height="240px" src={projectData.coverUrl} alt="tedx-2019 banner">
    {/if}
    <h1 class={postTitle}>{projectData.title}</h1>
    <Subtitle><center>{projectData.tagLine}</center></Subtitle>
    <div class={detailCardWrapper}>
        {#each projectGithubRepoData as repoData}
    <GitHubCard repoData={repoData}/>
    {/each}
    {#if projectData.liveLink} 
    <a class={repoLink} target="_blank" rel="noreferer" href={projectData.liveLink}><span class={activeBlink}></span><Highlight variant={highlightVariants.GREEN}><h4>  Live Link</h4></Highlight></a>
    {/if}
</div>
    <slot/>
</section>