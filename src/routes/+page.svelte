<script lang="ts">
	import { Flex, Frame, Header } from 'sk-clib';
	import Mugcorp from "@assets/Mugcorp.svg";
	import frostflame from "@assets/frostflame.png"
	import shattershot from "@assets/shattershot.png"
</script>

<Flex col fill centerx class="gap-20 pt-4" >
	<div class="grid h-[45%] w-full">
		<div class="row-start-1 col-span-1 w-auto ml-auto mr-auto rounded-xl bg-[#9013d9] text-center self-center text-white px-10 py-10">
			<img src={Mugcorp} alt="Mug Corp Logo" class="w-32 h-32">
		</div>
	</div>

	<h1 class="text-center text-5xl font-bold">Mugs</h1>

	<div class="grid h-[45%] w-fit grid-cols-3 gap-40">
		<div class="mx-auto flex w-[20vw] rounded-xl bg-purple-600"><img src={shattershot} alt="Shattershot"></div>
		<div class="mx-auto flex w-[20vw] rounded-xl bg-purple-600"><img src={frostflame} alt="Frostflame"></div>
		<div class="mx-auto flex w-[20vw] rounded-xl bg-purple-600"><img src={frostflame} alt="Mug-Army"></div>
	</div>

	<h1 class="text-center text-5xl font-bold">Teapots</h1>

	<div class="grid h-[45%] w-fit grid-cols-3 gap-40 pb-4">
		<div class="mx-auto flex w-[20vw] rounded-xl bg-purple-600"></div>
		<div class="mx-auto flex w-[20vw] rounded-xl bg-purple-600"></div>
		<div class="mx-auto flex w-[20vw] rounded-xl bg-purple-600"></div>
	</div>
</Flex>
