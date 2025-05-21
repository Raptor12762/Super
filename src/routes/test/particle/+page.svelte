<script lang="ts">
	import { Particle } from '@root/lib/components';
	import { Flex, Frame } from 'sk-clib';
</script>

<Frame fill class="box-border grid grid-cols-[0.5fr_1fr_1fr] grid-rows-2 gap-8 p-8 ">
	<!-- Hero Container -->
	<Flex class="relative overflow-hidden bg-red-200">
		<!-- Yellow Box as "Character" -->
		<Flex fill center>
			<Frame class="size-10 bg-amber-200" />
		</Flex>

		<!-- Particle Generator -->
		<Particle.Generator
			count={200}
			position={{
				start: {
					x: { min: 0, max: 0 },
					y: { min: 0.5, max: 0.5 }
				},
				end: {
					x: { min: 1, max: 1.5 },
					y: { min: 0, max: 1, as_delta: false }
				}
			}}
			class="absolute top-0 left-0 size-full"
			particleClass="duration-1600 absolute top-0 left-0 ease-in-out"
		>
			<span>📄</span>
		</Particle.Generator>
	</Flex>

	<!-- Table Container -->
	<Flex class="row-start-2 bg-red-200"></Flex>

	<!-- Text Container -->
	<Flex fill class="col-span-2 row-span-2 bg-red-200"></Flex>
</Frame>

<style scoped>
</style>
