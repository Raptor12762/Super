<script lang="ts">
	// --- Logic ---
	import { cn, explosion } from '@lib/utils';
	import type { Props } from '..';
	import { Frame, Header } from 'sk-clib';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import frostFlameFlame from '@assets/fireWide.png';

	let {
		class: className,
		portraitClass = $bindable('z-10'),
		name = $bindable('SAM'),
		...rest
	}: Props = $props();

	// Setup Portrait's class
	let portraitCls = $state(cn(portraitClass, className));
	$effect(() => {
		portraitCls = cn(portraitClass, className);
	});

	onMount(() => {
		const config = { duration: 300, fill: 'forwards', easing: 'ease-in-out' };

		// Character
		character_ref?.animate([{ transform: 'translateY(-80%)' }, {}], config as any);

		fire_ref?.animate([{ opacity: '0' }, { opacity: '0.6' }], {
			duration: 100,
			fill: 'forwards',
			easing: 'ease-in-out'
		});

		fire_ref?.animate([{ transform: 'scale(0.1)' }, { transform: 'scale(1.2)' }], {
			duration: 1600,
			fill: 'forwards',
			easing: 'ease-in-out'
			
		});

	});

	let character_ref: HTMLDivElement | undefined = $state(undefined);
	let fire_ref: HTMLElement | undefined = $state(undefined);
</script>

<Frame class="relative size-full">
	<div class="z-3 flex h-full flex-col items-center">
		<img bind:this={character_ref} {...rest} class={portraitCls} />
		<Header class={cn('z-14')} xxl>{name}</Header>

		<!-- wide flame -->
		 <img
			bind:this={fire_ref}
			src={frostFlameFlame}
			alt="fire"
			class={cn('absolute top-50 left-4 z-12 size-[20vw] duration-400 origin-bottom')}
		/>
	
	</div>
</Frame>

<!--@component
    Generated by SvelteForge🔥
-->
