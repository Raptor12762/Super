<script lang="ts">
	import sethruStandard from '@assets/seethruStandard.png';

	import { Portrait } from "@lib/components";
	import { Frame } from "sk-clib";
</script>

<!--Image with header fro character name, make sure it's centered to the box-->
<div class="grid size-full grid-flow-col grid-rows-3 gap-4 bg-[#ECF4FF]">
	<div class=" flex justify-center col-span-1 row-span-2 mt-4 ml-4 pt-10 bg-[#8EBDFF] text-white overflow-hidden">
		<Portrait.Seethru src={sethruStandard} class="h-[50vh]" name="Seethru"/>
	</div>
<!--This is the table to add strengths and weaknesses, just add on to it-->
	<div class=" flex justify-center items-center col-span-1 mb-4 ml-4 overflow-auto bg-[#8EBDFF]">
		<table class="w-[75%] border-2 p-2 bg-[#ECF4FF]">
			<thead>
				<tr class="border-1">
					<th>Strengths</th>
					<th>Weaknesses</th>
				</tr>
			</thead>
			<tbody class="text-center">
				<tr>
					<td class="border-1">Invisible</td>
					<td class="border-1">Immediate One Hit</td>
				</tr>
				<tr>
					<td class="border-1">Manipulative</td>
				</tr>
			</tbody>
		</table>
	</div>
<!--This explains the lore, you cann add picture at bottom if you want, up to you. Mostly text though-->
	<div class=" flex justify-center row-span-3 mt-4 mr-4 mb-4 pt-10 px-[10%] overflow-y-auto bg-[#8EBDFF] text-white">
		<Frame class="w-[80%] text-xl">
			Seethru is one of the few glass-ceramic teapots to ever have existed in the world. Seethru’s appearance is also mostly unknown to the public eye, and only rough imagery and sketches were made to estimate some sort of appearance for this teapot. 
			<br>
			<br>
			Ability 1 - Staticness
			<br>
			Seethru gradually blurs and causes static to any cameras, tvs, ect that are attempting to record him. This usually causes video corruptions, which leads to no proper imagery to be recorded of Seethru. 
			<br>
			<br>
			Ability 2 - Transparency
			<br>
			Seethru is mostly transparent, which makes it hard to distinguish  him from a distance. Further than about 3 miles, Seethru appears nearly invisible to the human, or in this case, mug eye. 
			<br>
			<br>
			Ability 3 - Corruption 
			<br>
			Seethru usually controls the teapots to do most, if not all of his plans. It's more akin to a hivemind situation, where all the teapots think similarly to Seethru’s goals.
			<br>
			<br>
			Seethru has no known backstory in our documents, and rarely has any imagery related to them. 

		</Frame>
	</div>
</div>