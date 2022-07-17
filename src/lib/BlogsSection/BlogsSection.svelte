<script lang="ts">
import Highlight from "$lib/atoms/highlight/Highlight.svelte";
import Subtitle from "$lib/atoms/subtitle/Subtitle.svelte";
import { pageSplashStyles } from "$lib/PageSplash/PageSplash.styles.css";
import BlogCard from "$lib/BlogCard/BlogCard.svelte";
import RightArrow from "$lib/svg/RightArrow.svelte";
import { blogsFlex,viewAllLink, viewAllParagraph } from "./blogsSection.styles.css";
import blogsData from '../../data/blogs.json'

</script>

<section class={pageSplashStyles}>
    <h2>Blog</h2>
   <Subtitle>My ideas,experiences and opinions in words</Subtitle>
   <div class={blogsFlex}>
   {#each blogsData.slice(0,4) as blog}
   <BlogCard blogData={blog} />
   {/each}

</div>
<p  class={viewAllParagraph}>
    <Highlight> <a class={viewAllLink} href="/blog">View All <RightArrow/> </a></Highlight>
   </p>
</section>