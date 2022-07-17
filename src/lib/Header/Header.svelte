<script lang="ts">

import {headerStyles,headerPre,indexLink} from './header.styles.css'
const logoArray=["<ps/>", "{ps}"]
const getRandomLogo=()=> logoArray[Math.floor(Math.random()*logoArray.length)]
 
</script>
<header class={headerStyles}>
    <a class={indexLink} href="/">
<pre class={headerPre}>{getRandomLogo()}</pre>
</a>
</header>
