<script lang="ts">
	import { Flex, Frame, Header } from 'sk-clib';
</script>

<!--Drawer, copy and past the stuff in the ts script (and the script too if not already done) to put it on other pages-->

<Flex fill col centerx class="box-border gap-20 p-10">
	<Frame flex row fillh class="w-[60%] rounded-md bg-red-200">
		<h1 class="mx-auto pt-6 text-5xl font-bold">Mug Corp</h1>
	</Frame>
	<!--Grid which shows the heros and villains, go this is pain-->
	<!--I agree, this is pain-->
	<Frame row fill class="root-grid-box grid gap-x-5 rounded-md">
		<Flex fill center class="col-span-4 row-start-1 bg-white">
			<Header bold xxl>Heros</Header>
		</Flex>

		<Frame class="col-span-1 row-start-2 bg-orange-600"></Frame>

		<Frame class="col-span-1 col-start-2 row-start-2 bg-orange-600"></Frame>

		<Frame class="col-span-1 col-start-3 row-start-2 bg-orange-600"></Frame>

		<Frame class="col-span-1 col-start-4 row-start-2 bg-orange-600"></Frame>

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
