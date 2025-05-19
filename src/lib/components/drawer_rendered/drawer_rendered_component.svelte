<script lang="ts">

	// --- Components ---
	import { Drawer } from '@lib/components';

	// --- Logic ---
	import { cn } from '@lib/utils';

	// --- Icons ---
	import MaterialSymbolsPerson from '~icons/material-symbols/person';
	import RiInfoI from '~icons/ri/info-i';
	import ElGroup from '~icons/el/group';
	import GameIconsGalaxy from '~icons/game-icons/galaxy';
	import PixelHomeSolid from '~icons/pixel/home-solid';
	import IconCaret from '~icons/solar/alt-arrow-left-bold';
	import FluentEmojiHighContrastManSuperhero from '~icons/fluent-emoji-high-contrast/man-superhero';
	import FluentEmojiHighContrastPersonSupervillain from '~icons/fluent-emoji-high-contrast/person-supervillain';

	// import teapotIcon from '~icons/'
	
	import MugIcon from "~icons/my-images/mugicon"
	import TeapotIcon from "~icons/my-images/teapoticon"

</script>


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
					<MugIcon class="size-9 shrink-0"/>
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
				
				<Drawer.Item href="/characters/Heroes/Mugarmy">
					{#snippet slot_text()}
						<span class="text-inherit">The Mug-Army</span>
					{/snippet}
				</Drawer.Item>
			</Drawer.Dropdown>
			<Drawer.Dropdown>
				{#snippet slot_root($dropdown_show$)}
				<Drawer.Item root>
					<div class="pl-2 ..."></div>
					<TeapotIcon class="size-9 shrink-0"/>
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

				<Drawer.Item href="/characters/Villain/Smartpot">
					{#snippet slot_text()}
						<span class="text-inherit">Smart Pots</span>
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