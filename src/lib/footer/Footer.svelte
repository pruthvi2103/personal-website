<script lang="ts">
import { highlightVariants } from '$lib/atoms/highlight/Highlight.data';

    import Highlight from '$lib/atoms/highlight/Highlight.svelte';
import Container from '$lib/container/Container.svelte';
import GithubIcon from '$lib/svg/GithubIcon.svelte';
import GmailIcon from '$lib/svg/GmailIcon.svelte';
import LinkedinIcon from '$lib/svg/LinkedinIcon.svelte';
import {footerStyles,socialsContainerStyles} from './footer.styles.css'
</script>

<footer class={footerStyles}>
    <Container>
Want To <Highlight variant={highlightVariants.YELLOW}>Connect?</Highlight>
<div class={socialsContainerStyles}>
    <a rel="me" href="https://github.com/pruthvi2103"><GithubIcon/></a>
    <a rel="me" href="https://www.linkedin.com/in/pruthvinshetty/"><LinkedinIcon/></a>
    <a rel="me" 
    href={`mailto:pruthvishetty5656@gmail.com?subject=Want%20to%20talk%20about&body=Hi%20Pruthvi,%0D%0A%0D%0AThanks%20and%20Regards,%0D%0A`}
    ><GmailIcon/></a>
</div>
</Container>
</footer>