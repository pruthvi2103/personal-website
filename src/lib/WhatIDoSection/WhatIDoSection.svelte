<script lang="ts">
import { highlightVariants } from "$lib/atoms/highlight/Highlight.data";

import Highlight from "$lib/atoms/highlight/Highlight.svelte";
import { calculateExperience } from "../../utils";

import { activeBlink, whatIDoParaStyles, whatIDoStyles } from "./whatIDoSection.styles.css";

const {internship,professional,unprofessional} = calculateExperience()

</script>

<section class={whatIDoStyles}>
<h3>What I do</h3>
<p class={whatIDoParaStyles}>
    I am a Full Stack Developer with 
    <Highlight variant={highlightVariants.PURPLE}>
        {professional[0]? `${professional[0]} ${professional[0] > 1 ? 'years':'year'}` :""} {professional[1] > 0 ? `, month${professional[1] > 1 ? `s` :``}` : ''}  
    </Highlight> 
    of experience, 
    I mostly work on <Highlight variant={highlightVariants.CYAN}>React</Highlight> (Nextjs and TS) and <Highlight variant={highlightVariants.GREEN}>Node</Highlight>. 
    But I love to explore new Technologies like <Highlight variant={highlightVariants.CYAN}>GO</Highlight>, <Highlight variant={highlightVariants.ORANGE}>Svelte</Highlight> (which this website is built on) and much more.
</p>
</section>