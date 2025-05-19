<script lang="ts">
	import FrostPortrait from "@assets/frostflame.png"

	import { Portrait } from "@lib/components";
	import { Frame } from "sk-clib";
</script>

<!--Image with header fro character name, make sure it's centered to the box-->
<div class="grid size-full grid-flow-col grid-rows-3 gap-4 bg-[#82c7ff]">
	<div class=" flex justify-center col-span-1 row-span-2 mt-4 ml-4 pt-10 overflow-hidden bg-[#006AC0] text-white">
		<Portrait.FrostFlame src={FrostPortrait} class="h-[50vh]" name="FrostFlame"/>
	</div>
<!--This is the table to add strengths and weaknesses, just add on to it-->
	<div class=" flex justify-center items-center col-span-1 mb-4 ml-4 bg-[#006AC0] w-[21.5vw]">
		<table class="w-[50%] border-2 p-2 bg-white">
			<thead>
				<tr class="border-1">
					<th>Strengths</th>
					<th>Weaknesses</th>
				</tr>
			</thead>
			<tbody class="text-center">
				<tr>
					<td class="border-1">Freezing Flame</td>
					<td class="border-1">Fragile at the head</td>
				</tr>
				<tr>
					<td class="border-1">Sturdy Body</td>
				</tr>
				<tr>
					<td class="border-1">Lights up dark areas</td>
				</tr>
				<tr>
					<td class="border-1">Shapeshifts</td>
				</tr>
			</tbody>
		</table>
	</div>
<!--This explains the lore, you cann add picture at bottom if you want, up to you. Mostly text though-->
	<div class=" flex justify-center row-span-3 mt-4 mr-4 mb-4 pt-10 bg-[#006AC0] text-white">
		<Frame class="w-[80%]">
			Frostflame is more of a unique hero compared to the rest. Lacking most features from other mugs, such as a handle and some general liquid inside of the mug, it is unknown how frostflame is currently standing without any sustenance inside of his mug. 
			<br>
			<br>
			Ability 1  – Flame Imbue
			<br>
			Frostflame can imbue any object he’s holding with his frostflame, enhancing whatever he may be holding at the time. This causes the item he’s holding to be on fire, similar to the flame coming from his head. 
			<br>
			<br>
			Ability 2  – Flame Control 
			<br>
			Frostflame can control his own flames as he pleases, causing them to form walls or cover large areas in a relatively quick manner. 
			<br>
			<br>
			Frostflame’s flames do not provide the same heat like a normal fire would. Instead, the flames provide a “chilling” sensation, akin to being sick due to a fever or similar illness. His flames generally are always active, (as depicted from the constant flame on his head,) but can be controlled in any way he deems necessary. His flames can also solidify whenever he chooses, which turns the flames into ice. 
		</Frame>
	</div>
</div>


