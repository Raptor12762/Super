<script lang="ts">
	import { Flex, Frame, Header } from 'sk-clib';
</script>

<Flex col fill centerx class="gap-20 pt-4">
	<div class="grid h-[45%] w-full">
		<div class="mx-auto flex w-[75%] rounded-xl bg-purple-600">
			<h1 class="font-bold text-white">Mug Corp</h1>
		</div>
	</div>

	<h1 class="text-center text-5xl font-bold">Mugs</h1>

	<div class="grid h-[45%] w-fit grid-cols-3 gap-40">
		<div class="mx-auto flex w-[20vw] rounded-xl bg-purple-600"></div>
		<div class="mx-auto flex w-[20vw] rounded-xl bg-purple-600"></div>
		<div class="mx-auto flex w-[20vw] rounded-xl bg-purple-600"></div>
	</div>

	<h1 class="text-center text-5xl font-bold">Teapots</h1>

	<div class="grid h-[45%] w-fit grid-cols-2 gap-40 pb-4">
		<div class="mx-auto flex w-[20vw] rounded-xl bg-purple-600"></div>
		<div class="mx-auto flex w-[20vw] rounded-xl bg-purple-600"></div>
	</div>
</Flex>
