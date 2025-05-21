<script lang="ts">
	import { Flex, Frame, Header } from 'sk-clib';
	import Mugcorp from '@assets/Mugcorp.svg';
	import frostflame from '@assets/frostflame.png';
	import shattershot from '@assets/shattershot.png';
	import seethru from '@assets/seethruStandard.png';
	import { Shattershot } from '@root/lib/components/portrait';
	import smartpot from '@assets/smartpot.png';
	import stone from '@assets/stonepot.png';
	import blueprint from '@assets/blueprint3.png';
</script>

<!--Logo Mug Corp-->
<Flex col fill centerx class="no-scroll h-fit overflow-y-auto bg-[#EDCFFF] pt-4">
	<div class="grid h-fit w-full">
		<div
			class="col-span-1 row-start-1 mr-auto ml-auto w-auto self-center rounded-xl bg-[#9013d9] px-2 py-2 text-center text-white"
		>
			<img src={Mugcorp} alt="Mug Corp Logo" class="h-75 w-75" />
			Defending the Righteous, and what’s theirs.
		</div>
	</div>

	<h1 class="mt-5 mb-5 text-center text-5xl font-bold">Mugs</h1>

	<div class="grid h-fit w-fit grid-cols-3 gap-40">
		<a href="/characters/Heroes/Shattershot"
			><div
				class="mx-auto ml-5 flex h-150 w-[20vw] flex-col rounded-xl bg-[#9013d9] duration-300 hover:shadow-xl/50"
			>
				<img src={shattershot} alt="Shattershot" class="pt-10" />
				<span class="mt-auto text-center text-3xl text-white">Shattershot</span>
			</div></a
		>
		<a href="/characters/Heroes/FrostFlame"
			><div
				class="mx-auto flex h-150 w-[20vw] flex-col rounded-xl bg-[#9013d9] duration-300 hover:shadow-xl/50"
			>
				<img src={frostflame} alt="Frostflame" /><span
					class="mt-auto text-center text-3xl text-white">FrostFlame</span
				>
			</div></a
		>
		<a href="/characters/Heroes/Shattershot"
			><div
				class="mx-auto ml-5 flex h-150 w-[20vw] flex-col rounded-xl bg-[#9013d9] duration-300 hover:shadow-xl/50"
			>
				<img src={shattershot} alt="Shattershot" />
				<span class="mt-auto text-center text-3xl text-white">Shattershot</span>
			</div></a
		>
		
		<a href="/characters/Heroes/Mugarmy"
			><div
				class="mx-auto flex h-150 w-[20vw] flex-col rounded-xl bg-[#9013d9] duration-300 hover:shadow-xl/50 items-center justify-between pb-1 pt-40"
			>
				<img src={blueprint} alt="Mug-Army" class="rotate-90" /><span
					class="text-center text-3xl text-white justify-self-end">The Mug-Army</span
				>
			</div></a
		>
	</div>

	<h1 class="mt-5 mb-5 text-center text-5xl font-bold">Teapots</h1>

	<div class="grid h-fit w-fit grid-cols-3 gap-40 pb-4">
		<a href="/characters/Villain/Seethru"
			><div
				class="mx-auto ml-5 flex h-150 w-[20vw] flex-col rounded-xl bg-[#9013d9] duration-300 hover:shadow-xl/50"
			>
				<img src={seethru} alt="Seethru" /><span class="mt-auto text-center text-3xl text-white"
					>Seethru</span
				>
			</div></a
		>
		<a href="/characters/Villain/Smartpot"
			><div
				class="mx-auto flex h-150 w-[20vw] flex-col rounded-xl bg-[#9013d9] duration-300 hover:shadow-xl/50"
			>
				<img src={smartpot} alt="Smartpots" /><span class="mt-auto text-center text-3xl text-white"
					>Smartpots</span
				>
			</div></a
		>
		<a href="/characters/Villain/Stonepot"
			><div
				class="mx-auto flex h-150 w-[20vw] flex-col rounded-xl bg-[#9013d9] duration-300 hover:shadow-xl/50"
			>
				<img src={stone} alt="Stonepot" class="pt-20" /><span class="mt-auto text-center text-3xl text-white">Stonepot</span>
			</div></a
		>
	</div>
</Flex>
