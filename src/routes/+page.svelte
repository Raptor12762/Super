<script lang="ts">
	import { Drawer } from '@lib/components';
	import DrawerItem from '@root/lib/components/drawer/components/drawer-item.svelte';
	import MaterialSymbolsPerson from '~icons/material-symbols/person';
	import RiInfoI from '~icons/ri/info-i';
	import ElGroup from '~icons/el/group';
	import GameIconsGalaxy from '~icons/game-icons/galaxy';
	import PixelHomeSolid from '~icons/pixel/home-solid';
	import { Flex, Frame, Header } from 'sk-clib';
</script>

<!--Drawer, copy and past the stuff in the ts script (and the script too if not already done) to put it on other pages-->
<Drawer.Root active={true}>
	<Drawer.Menu>
		<Drawer.Item href="/src/routes">
			<PixelHomeSolid class="size-6 shrink-0" />
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
			<RiInfoI class="size-6 shrink-0" />
			{#snippet slot_text()}
				<span class="text-inherit">About</span>
			{/snippet}
		</Drawer.Item>
	</Drawer.Menu>
</Drawer.Root>

<Flex fill col centerx class="box-border gap-20 p-10">
	<Frame flex row fillh class="w-[60%] rounded-md bg-red-200"></Frame>
	<Frame row fill class="root-grid-box grid rounded-md bg-red-200">
		<Flex fill center class="col-span-4 row-start-1 bg-white">
			<Header bold xxl>Heros</Header>
		</Flex>
		<Flex fill center class="col-span-4 row-start-3 bg-white">
			<Header bold xxl>Villians</Header>
		</Flex>
	</Frame>
</Flex>

<style lang="postcss">
	:global(.root-grid-box) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 50px 1fr 50px 1fr;
	}
</style>
