<script lang="ts">
	import { Drawer } from '@lib/components';
	import DrawerItem from '@root/lib/components/drawer/components/drawer-item.svelte';
	import MaterialSymbolsPerson from '~icons/material-symbols/person';
	import RiInfoI from '~icons/ri/info-i';
	import ElGroup from '~icons/el/group';
	import GameIconsGalaxy from '~icons/game-icons/galaxy';
	import PixelHomeSolid from '~icons/pixel/home-solid';
	</script>


<!--Drawer, copy and past the stuff in the ts script (and the script too if not already done) to put it on other pages-->
<Drawer.Root active={true}>
	<Drawer.Menu>
		<Drawer.Item href="/src/routes">
			<PixelHomeSolid class="size-6 shrink-0"/>
			{#snippet slot_text()}
				<span class="text-inherit">Home</span>
			{/snippet}
		</Drawer.Item>
		<Drawer.Item href="/src/routes">
			<MaterialSymbolsPerson class="size-6 shrink-0"/>
			{#snippet slot_text()}
				<span class="text-inherit">Characters</span>
			{/snippet}
		</Drawer.Item>
		<Drawer.Item href="/about">
			<GameIconsGalaxy class="size-6 shrink-0"/>
			{#snippet slot_text()}
				<span class="text-inherit">Universe (About for now)</span>
			{/snippet}
		</Drawer.Item>
		<Drawer.Item href="/about">
			<ElGroup class="size-6 shrink-0"/>
					{#snippet slot_text()}
						<span class="text-inherit">Team (About for now)</span>
					{/snippet}
		</Drawer.Item>
		<Drawer.Item href="/about">
			<RiInfoI class="size-6 shrink-0"/>
					{#snippet slot_text()}
						<span class="text-inherit">About</span>
					{/snippet}
		</Drawer.Item>
	</Drawer.Menu>
</Drawer.Root>

<div class="w-full flex flex-row justify-center pt-5">
	<div class="box-content size-32 p-30 bg-blue-500 w-1/2 rounded-3xl">

	</div>
</div>