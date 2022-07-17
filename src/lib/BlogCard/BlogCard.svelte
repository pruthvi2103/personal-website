<script lang="ts">
import Subtitle from "$lib/atoms/subtitle/Subtitle.svelte";
import { getFormattedDate } from "../../utils";
import { blogCardWrapperStyles,neutralLink,dateAndViewsSection } from "./blogCard.styles.css";

export let blogData;
</script>
<a class={neutralLink} href={`/blogs/${blogData.id}`}>
<div class={blogCardWrapperStyles}>
<h4>{blogData.title}</h4>
<Subtitle>
    {blogData.brief}
</Subtitle>
<div class={dateAndViewsSection}>
    <Subtitle>
    {getFormattedDate(blogData.publishedOn)}
</Subtitle>
</div>
</div>
</a>