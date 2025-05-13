<script lang="ts">
	import { Drawer } from '@lib/components';
	import DrawerItem from '@root/lib/components/drawer/components/drawer-item.svelte';
	import MaterialSymbolsPerson from '~icons/material-symbols/person';
	import RiInfoI from '~icons/ri/info-i';
	import ElGroup from '~icons/el/group';
	import GameIconsGalaxy from '~icons/game-icons/galaxy';
	import PixelHomeSolid from '~icons/pixel/home-solid';
	import IconCaret from '~icons/solar/alt-arrow-left-bold';
	import FluentEmojiHighContrastManSuperhero from '~icons/fluent-emoji-high-contrast/man-superhero';
	import FluentEmojiHighContrastPersonSupervillain from '~icons/fluent-emoji-high-contrast/person-supervillain';
	import { Flex, Frame, Header } from 'sk-clib';
	import { cn } from '@lib/utils';
</script>

<!--Drawer, copy and past the stuff in the ts script (and the script too if not already done) to put it on other pages-->
<Drawer.Root active={true}>
	<Drawer.Menu>
		<Drawer.Item href="/">
			<PixelHomeSolid class="size-6 shrink-0" />
			{#snippet slot_text()}
				<span class="text-inherit">Home</span>
			{/snippet}
		</Drawer.Item>

		<Drawer.Dropdown>
			{#snippet slot_root($dropdown_show$)}
			<Drawer.Item root>
				<MaterialSymbolsPerson class="size-6 shrink-0"/>
				{#snippet slot_text()}
					<span class="text-inherit">Characters</span>
				{/snippet}
				{#snippet slot_right()}
					<IconCaret
						class={cn(
						'shrink-0 rotate-180 animate ease-out',
						$dropdown_show$ && 'rotate-270'
						)}
					/>
				{/snippet}
			</Drawer.Item>
			{/snippet}

			<Drawer.Dropdown>
				{#snippet slot_root($dropdown_show$)}
				<Drawer.Item root>
					<div class="pl-2 ..."></div>
					<FluentEmojiHighContrastManSuperhero class="size-6 shrink-0"/>
					{#snippet slot_text()}
						<span class="text-inherit">Heros</span>
					{/snippet}
					{#snippet slot_right()}
						<IconCaret
							class={cn(
							'shrink-0 rotate-180 animate ease-out',
							$dropdown_show$ && 'rotate-270'
						)}
						/>
					{/snippet}
				</Drawer.Item>
				{/snippet}

				<Drawer.Item href="/characters/Heroes/FrostFlame">
					{#snippet slot_text()}
						<span class="text-inherit">Frost Flame</span>
					{/snippet}
				</Drawer.Item>

				<Drawer.Item href="/characters/Heroes/Shattershot">
					{#snippet slot_text()}
						<span class="text-inherit">Shattershot</span>
					{/snippet}
				</Drawer.Item>
				<Drawer.Dropdown>
					{#snippet slot_root($dropdown_show$)}
				<Drawer.Item root>
					<div class="pl-8 ..."></div>
					{#snippet slot_text()}
						<span class="text-inherit">The Mug-Army</span>
					{/snippet}
					{#snippet slot_right()}
						<IconCaret
							class={cn(
							'shrink-0 rotate-180 animate ease-out',
							$dropdown_show$ && 'rotate-270'
						)}
						/>
					{/snippet}
				</Drawer.Item>
					{/snippet}
					<Drawer.Item href="/characters/Heroes/Archer">
						<div class="pl-2 ..."></div>
						{#snippet slot_text()}
							<span class="text-inherit">Archer</span>
						{/snippet}
					</Drawer.Item>

					<Drawer.Item href="/characters/Heroes/Cannoneer">
						<div class="pl-2 ..."></div>
						{#snippet slot_text()}
							<span class="text-inherit">Cannoneer</span>
						{/snippet}
					</Drawer.Item>

					<Drawer.Item href="/characters/Heroes/Longbow">
						<div class="pl-2 ..."></div>
						{#snippet slot_text()}
							<span class="text-inherit">Longbow</span>
						{/snippet}
					</Drawer.Item>
				</Drawer.Dropdown>
			</Drawer.Dropdown>
			<Drawer.Dropdown>
				{#snippet slot_root($dropdown_show$)}
				<Drawer.Item root>
					<div class="pl-2 ..."></div>
					<FluentEmojiHighContrastPersonSupervillain class="size-6 shrink-0"/>
					{#snippet slot_text()}
						<span class="text-inherit">Villains</span>
					{/snippet}
					{#snippet slot_right()}
						<IconCaret
							class={cn(
							'shrink-0 rotate-180 animate ease-out',
							$dropdown_show$ && 'rotate-270'
						)}
						/>
					{/snippet}
				</Drawer.Item>
				{/snippet}

				<Drawer.Item href="/characters/Villain/Seethru">
					{#snippet slot_text()}
						<span class="text-inherit">Seethru</span>
					{/snippet}
				</Drawer.Item>

				<Drawer.Item href="/characters/Villain/Stonepot">
					{#snippet slot_text()}
						<span class="text-inherit">Stonepot</span>
					{/snippet}
				</Drawer.Item>
			</Drawer.Dropdown>
		</Drawer.Dropdown>
		

		<Drawer.Item href="/universe">
			<GameIconsGalaxy class="size-6 shrink-0"/>
			{#snippet slot_text()}
				<span class="text-inherit">Universe</span>
			{/snippet}
		</Drawer.Item>

		<Drawer.Item href="/about/team">
			<ElGroup class="size-6 shrink-0"/>
					{#snippet slot_text()}
						<span class="text-inherit">Team</span>
					{/snippet}
		</Drawer.Item>
		
		<Drawer.Item href="/about/info">
			<RiInfoI class="size-6 shrink-0" />
			{#snippet slot_text()}
				<span class="text-inherit">About</span>
			{/snippet}
		</Drawer.Item>
	</Drawer.Menu>
</Drawer.Root>

<Flex fill col centerx class="box-border gap-20 p-10">
	<Frame flex row fillh class="w-[60%] rounded-md bg-red-200">
		<h1 class="text-5xl font-bold mx-auto pt-6">Mug Corp</h1>
	</Frame>
	<!--Grid which shows the heros and villains, go this is pain-->
	<Frame row fill class="root-grid-box grid rounded-md gap-x-5">
		<Flex fill center class="col-span-4 row-start-1 bg-white">
			<Header bold xxl>Heros</Header>
		</Flex>

		<Frame class="row-start-2 col-span-1 bg-orange-600">

		</Frame>

		<Frame class="row-start-2 col-start-2 col-span-1 bg-orange-600">

		</Frame>

		<Frame class="row-start-2 col-start-3 col-span-1 bg-orange-600">

		</Frame>

		<Frame class="row-start-2 col-start-4 col-span-1 bg-orange-600">

		</Frame>

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
