<script lang="ts">
    import { highlightVariants } from "$lib/atoms/highlight/Highlight.data";
    
    
    import Highlight from "$lib/atoms/highlight/Highlight.svelte";
    import Subtitle from "$lib/atoms/subtitle/Subtitle.svelte";
    import { repoLink } from "$lib/GithubCard/GithubCard.styles.css";
    import GitHubCard from "$lib/GithubCard/GitHubCard.svelte";
    import { activeBlink } from "$lib/WhatIDoSection/whatIDoSection.styles.css";
    import { projectBlogStyles,postTitle,coverImage, detailCardWrapper, blogDivider } from "./blog.styles.css";
    export let title;
    export let brief;
    export let coverUrl;
    </script>
    
    <section class={projectBlogStyles}>
        {#if coverUrl} 
        <img class={coverImage} width="100%" height="240px" src={coverUrl} alt={`${title}-banner`}>
        {/if}
        <h1 class={postTitle}>{title}</h1>
        <Subtitle>{brief}</Subtitle>
        <div class={blogDivider}></div>
        <slot/>
    </section>