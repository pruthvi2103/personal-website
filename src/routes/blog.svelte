<script lang="ts">
    import Highlight from "$lib/atoms/highlight/Highlight.svelte";
    import Subtitle from "$lib/atoms/subtitle/Subtitle.svelte";
    import { pageSplashStyles } from "$lib/PageSplash/PageSplash.styles.css";
    import BlogCard from "$lib/BlogCard/BlogCard.svelte";
    import RightArrow from "$lib/svg/RightArrow.svelte";
    import { blogsFlex,viewAllLink, viewAllParagraph } from "$lib/BlogsSection/blogsSection.styles.css";
    import blogsData from '../data/blogs.json'
import Container from "$lib/container/Container.svelte";
    
    </script>
    <Container>
    <section class={pageSplashStyles}>
        <h2>Blog</h2>
       <Subtitle>My ideas,experiences and opinions in words</Subtitle>
       <div class={blogsFlex}>
       {#each blogsData as blog}
       <BlogCard blogData={blog} />
       {/each}
    
    </div>
    </section>
</Container>