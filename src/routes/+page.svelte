<script lang="ts">
	import { Flex, Frame, Header } from 'sk-clib';
	import Mugcorp from "@assets/Mugcorp.svg";
	import frostflame from "@assets/frostflame.png"
	import shattershot from "@assets/shattershot.png"
	import seethru from "@assets/seethruStandard.png"
	import placeholder from "@assets/shatterExplosion.png"
	import { Shattershot } from '@root/lib/components/portrait';
</script>

<Flex col fill centerx class="pt-4 h-fit overflow-y-auto no-scroll bg-[#EDCFFF]">
	<div class="grid h-fit w-full">
		<div class="row-start-1 col-span-1 w-auto ml-auto mr-auto rounded-xl bg-[#9013d9] text-center self-center text-white px-2 py-2">
			<img src={Mugcorp} alt="Mug Corp Logo" class="w-75 h-75">
			Defending the Righteous, and what’s theirs.
		</div>
	</div>

	<h1 class="text-center text-5xl font-bold mt-5 mb-5">Mugs</h1>

	<div class="grid h-fit w-fit grid-cols-3 gap-40">
		<a href="/characters/Heroes/Shattershot"><div class="mx-auto flex flex-col w-[20vw] rounded-xl bg-[#9013d9] ml-5 hover:shadow-xl/50 duration-300"><img src={shattershot} alt="Shattershot"> <span class="text-center text-white text-3xl mt-auto">Shattershot</span></div></a>
		<a href="/characters/Heroes/FrostFlame"><div class="mx-auto flex flex-col w-[20vw] rounded-xl bg-[#9013d9] hover:shadow-xl/50 duration-300"><img src={frostflame} alt="Frostflame"><span class="text-center text-white text-3xl mt-auto">FrostFlame</span></div></a>
		<div class="mx-auto flex flex-col w-[20vw] rounded-xl bg-[#9013d9] hover:shadow-xl/50 duration-300"><img src={placeholder} alt="Mug-Army"><span class="text-center text-white text-3xl mt-auto">The Mug-Army</span></div>
	</div>

	<h1 class="text-center text-5xl font-bold mt-5 mb-5">Teapots</h1>

	<div class="grid h-fit w-fit grid-cols-3 gap-40 pb-4">
		<div class="mx-auto flex flex-col w-[20vw] rounded-xl bg-[#9013d9] ml-5 hover:shadow-xl/50 duration-300"><img src={seethru} alt="Seethru"><span class="text-center text-white text-3xl mt-auto">Seethru</span></div>
		<div class="mx-auto flex flex-col w-[20vw] rounded-xl bg-[#9013d9] hover:shadow-xl/50 duration-300"><img src={placeholder} alt="Smartpots"><span class="text-center text-white text-3xl mt-auto">Smartpots</span></div>
		<div class="mx-auto flex flex-col w-[20vw] rounded-xl bg-[#9013d9] hover:shadow-xl/50 duration-300"><img src={placeholder} alt="Stonepot"><span class="text-center text-white text-3xl mt-auto">Stonepot</span></div>
	</div>
</Flex>