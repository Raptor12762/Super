<script lang="ts">
	import '../app.css';


	let { children } = $props();
</script>

<div class="flex flex-row size-full">
	{@render children()}
</div>