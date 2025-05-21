<script lang="ts">
	import StonepotPortrait from "@assets/stonepot.png"

	import { Portrait } from "@lib/components";
	import { Frame } from "sk-clib";
</script>

<!--Image with header fro character name, make sure it's centered to the box-->
<div class="grid size-full grid-flow-col grid-rows-3 gap-4 bg-[#616161]">
	<div class=" flex justify-center col-span-1 row-span-2 mt-4 ml-4 pt-10 bg-[#304a31] text-white overflow-hidden">
		<Portrait.Stonepot src={StonepotPortrait} class="h-[50vh]" name="Stonepot"/>
	</div>
<!--This is the table to add strengths and weaknesses, just add on to it-->
	<div class=" flex justify-center items-center col-span-1 mb-4 ml-4 overflow-auto bg-[#304a31]">
		<table class="w-[75%] border-2 p-2 bg-[#616161]">
			<thead>
				<tr class="border-1">
					<th class="border-1">Strengths</th>
					<th class="border-1">Weaknesses</th>
				</tr>
			</thead>
			<tbody class="text-center">
				<tr>
					<td class="border-1">Extremely Strong</td>
					<td class="border-1">Slow</td>
				</tr>
				<tr>
					<td class="border-1">Controlls Earth</td>
					<td class="border-1">Dumb</td>
				</tr>
			</tbody>
		</table>
	</div>
<!--This explains the lore, you cann add picture at bottom if you want, up to you. Mostly text though-->
	<div class=" flex justify-center row-span-3 mt-4 mr-4 mb-4 pt-10 px=[10%] overflow-y-auto bg-[#304a31] text-white">
		<Frame class="w-[80%] text-xl">
			Stonepot is an old teapot that has rocks and stones infused into his torso and right arm. These stones are semi-magical, and allow for earth controlling capabilities to the user they’re attached to. This allows for Stonepot to create stone spikes on nearby enemies, and allows for various other stone-related activities to be done with relative ease. 
			<br>
			<br>
			Ability 1 - Stone Impale
			<br>
			Stonepot quickly slams his hands together and throws a punch at a nearby enemy. This creates a stone spike on the location the punch was thrown, and is created near instantly. 
			<br>
			<br>
			Ability 2 - Stone Shift 
			<br>
			Stonepot can control loose rubble and boulders at his will, essentially acting as a form of telekinesis but only applicable on non-anchored rocks. The size of the rocks usually does not matter, but can somewhat hinder the movement of Stonepot if a lot of rocks are being controlled at once. 
			<br>
			<br>
			Stonepot’s rocky abilities come from some sort of scientific accident that Seethru had conducted with the Smartpots. The experiment was a complete failure, due to the destruction of the lab and the general terror that occoured in the teapot’s quarters after the Stonepot broke loose. Stonepot himself took a while to get accustomed to his new body, and does not exactly know how to communicate in english well. Their sentences are mostly broken, and Stonepot’s actions seem to be out of pure survival instincts rather than a cohesive mind. 

		</Frame>
	</div>
</div>
