<script lang="ts">
	import { Portrait } from "@lib/components";
	import { Frame } from "sk-clib";
</script>

<!--Image with header fro character name, make sure it's centered to the box-->
<div class="grid size-full grid-flow-col grid-rows-3 gap-4 bg-[#EBBB98]">
	<div class=" flex justify-center col-span-1 row-span-2 mt-4 ml-4 pt-10 bg-[#A16A42] text-white">
		Image with name of Character in big heading
	</div>
<!--This is the table to add strengths and weaknesses, just add on to it-->
	<div class=" flex justify-center items-center col-span-1 mb-4 ml-4 overflow-auto bg-[#A16A42]">
		<table class="w-[75%] border-2 p-2 bg-[#EBBB98]">
			<thead>
				<tr class="border-1">
					<th class="border-1">Strengths</th>
					<th class="border-1">Weaknesses</th>
				</tr>
			</thead>
			<tbody class="text-center">
				<tr>
					<td class="border-1">Mass Produced</td>
					<td class="border-1">Lower Durablility</td>
				</tr>
			</tbody>
		</table>
	</div>
<!--This explains the lore, you cann add picture at bottom if you want, up to you. Mostly text though-->
	<div class=" flex justify-center row-span-3 mt-4 mr-4 mb-4 pt-10 px-[10%] overflow-y-auto bg-[#A16A42] text-white">
		<Frame class="w-[80%] text-xl">
			Consists of Cannoneers, Archers, and Longbow-Archers
			<br>
			The Mugarmy is a army which is funded by MugCorp, which have vast numbers of varying levels of skills of mugs, and ceramics alike. 
			<br>
			<br>
			<br>
			<br>
			ARCHERS
			<br>
			Archers are the most basic of the army, and generally consist of mugs being put in lookout towers, armed with bow and arrows. They do not have much skills outside of their natural talent for handling bows and arrows. There can be either male or female archers, but due to the hood and cloak, it is oftentimes hard to distinguish between the two.
			<br>
			<br>
			LONGBOW-ARCHERS
			<br>
			Longbow archers (also known as Longbows) are like regular archers, but much more advanced. They are oftentimes seen in high, steel-enforced archer towers placed strategically on mountains and general vantage points alike. Another difference between their normal counterparts is their bow, which has a rose-gold arrow shelf. They are treated with respect, as becoming a Longbow-Archer is not an easy task. 
			<br>
			<br>
			CANNONEERS
			<br>
			Cannoneers are the most dangerous out of the bunch, and the most unfilled position, for good reason. Cannoneers do not have normal-mug heads like a normal ceramic, but instead have a large cannon which can fire right from their neck, or what's left of it. Unlike the other two positions, Cannoneers are considered “Disposable” due to most Cannoneers losing their head, in this case cannon, after firing once due to the recoil. MugCorp still funds this department of the Mugarmy, considering the sheer damage output of Cannoneers, and the off chance that some do survive, can further advance their skills as a Cannoneer.
		</Frame>
	</div>
</div>