<script lang="ts">
	import '../app.css';

	import { Frame } from 'sk-clib';

	let { children } = $props();
</script>


<Frame flex row fill>
	{@render children()}
</Frame>