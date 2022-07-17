<script lang="ts">
import {cyanHighlight,greenHighlight,orangeHighlight,purpleHighlight,redHighlight,yellowHighlight} from './Highlight.styles.css'
import {highlightVariants} from './Highlight.data'
export let variant:highlightVariants = highlightVariants.RED
const colorKey={
    [highlightVariants.RED]:redHighlight,
    [highlightVariants.CYAN]:cyanHighlight,
    [highlightVariants.GREEN]:greenHighlight,
    [highlightVariants.YELLOW]:yellowHighlight,
    [highlightVariants.ORANGE]:orangeHighlight,
    [highlightVariants.PURPLE]:purpleHighlight,
}
</script>
    <span class={`${colorKey[variant]}`}>
    <slot/>
    </span>