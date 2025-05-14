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
						<span class="text-inherit">Mugs</span>
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
						<span class="text-inherit">Teapots</span>
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
<!--nice-->

<div class="grid grid-flow-col w-full grid-rows-3 gap-4">
  <div class="row-span-3 ml-4 mt-4 mb-4 bg-amber-900">Frostflame is more of a unique hero compared to the rest. Lacking most features from other mugs, such as a handle and some general liquid inside of the mug, it is unknown how frostflame is currently standing without any sustenance inside of his mug. 
	<br>
	<br>
	Frostflame’s flames do not provide the same heat like a normal fire would. Instead, the flames provide a “chilling” sensation, akin to being sick due to a fever or similar illness. His flames generally are always active, (as depicted from the constant flame on his head,) but can be controlled in any way he deems necessary. His flames can also solidify whenever he chooses, which turns the flames into ice. 
  </div>
  <div class="col-span-2 mr-4 mt-4 bg-amber-600">007 <!--Don't know what we would replace this with, but i'm leaving it here just in case. Feel free to rearrange the places of the current text--></div>
  <div class="col-span-2 row-span-2 mr-4 mb-4 bg-amber-300">Frost Flame has the ability to create a freezing frost fire. Though blue in a flame typically means it's hotter, in this case, it's much colder.
	<br>
	<br>
	Frost Flame has the ability to manipulate frozen fire to his liking and oftentimes uses it to light dark rooms or create walls or even just to cover territory by freezing the ground to make it slippery.
	<br>
	<br>
	Frostflame can imbue any object he’s holding with his frostflame, enhancing whatever he may be holding at the time. This causes the item he’s holding to be on fire, similar to the flame coming from his head. 
	<br>
	<br>
	Frost Flame also has the ability to solidify himself into solid ice, essentially freezing him in place.
  </div>
</div>