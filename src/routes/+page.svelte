<script lang="ts">
	import { Flex, Frame, Header } from 'sk-clib';
	import Mugcorp from "@assets/Mugcorp.svg";
	import frostflame from "@assets/frostflame.png"
	import shattershot from "@assets/shattershot.png"
	import seethru from "@assets/seethruStandard.png"
	import placeholder from "@assets/shatterExplosion.png"
</script>

<Flex col fill centerx class="pt-4 h-fit overflow-y-auto no-scroll">
	<div class="grid h-fit w-full">
		<div class="row-start-1 col-span-1 w-auto ml-auto mr-auto rounded-xl bg-[#9013d9] text-center self-center text-white px-10 py-10">
			<img src={Mugcorp} alt="Mug Corp Logo" class="w-32 h-32">
		</div>
	</div>

	<h1 class="text-center text-5xl font-bold">Mugs</h1>

	<div class="grid h-fit w-fit grid-cols-3 gap-40">
		<div class="mx-auto flex flex-col w-[20vw] rounded-xl bg-purple-600"><img src={shattershot} alt="Shattershot"> <span class="text-center text-white">Shattershot</span></div>
		<div class="mx-auto flex flex-col w-[20vw] rounded-xl bg-purple-600"><img src={frostflame} alt="Frostflame"><span class="text-center text-white">FrostFlame</span></div>
		<div class="mx-auto flex flex-col w-[20vw] rounded-xl bg-purple-600"><img src={placeholder} alt="Mug-Army"><span class="text-center text-white">The Mug-Army</span></div>
	</div>

	<h1 class="text-center text-5xl font-bold">Teapots</h1>

	<div class="grid h-fit w-fit grid-cols-3 gap-40 pb-4">
		<div class="mx-auto flex flex-col w-[20vw] rounded-xl bg-purple-600"><img src={seethru} alt="Seethru"><span class="text-center text-white">Seethru</span></div>
		<div class="mx-auto flex flex-col w-[20vw] rounded-xl bg-purple-600"><img src={placeholder} alt="Smartpots"><span class="text-center text-white">Smartpots</span></div>
		<div class="mx-auto flex flex-col w-[20vw] rounded-xl bg-purple-600"><img src={placeholder} alt="Stonepot"><span class="text-center text-white">Stonepot</span></div>
	</div>
</Flex>