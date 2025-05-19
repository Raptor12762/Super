<script lang="ts">
	import ShattershotPortrait from "@assets/shattershot.png"
	
	import { Portrait } from "@lib/components";
	import { Frame } from "sk-clib";
</script>

<!--Image with header fro character name, make sure it's centered to the box-->
<div class="grid size-full grid-flow-col grid-rows-3 gap-4 bg-[#EDCFFF]">
	<div class=" flex justify-center col-span-1 row-span-2 mt-4 ml-4 pt-10 overflow-hidden bg-[#9013d9] text-white">
		
		<Portrait.Shattershot src={ShattershotPortrait} class="h-[50vh]" name="Shattershot"/>
	</div>
<!--This is the table to add strengths and weaknesses, just add on to it-->
	<div class=" flex justify-center items-center col-span-1 mb-4 ml-4 overflow-auto bg-[#9013d9]">
		<table class="w-[75%] border-2 p-2 bg-white">
			<thead>
				<tr class="border-1">
					<th class="border-1">Strengths</th>
					<th>Weaknesses</th>
				</tr>
			</thead>
			<tbody class="text-center">
				<tr>
					<td class="border-1">Glass Shards</td>
					<td class="border-1">Fragile</td>
				</tr>
				<tr>
					<td class="border-1">Quick</td>
					<td class="border-1">Limited Stamina</td>
				</tr>
				<tr>
					<td class="border-1">Self Refill</td>
				</tr>
			</tbody>
		</table>
	</div>
<!--This explains the lore, you cann add picture at bottom if you want, up to you. Mostly text though-->
	<div class=" flex justify-center row-span-3 mt-4 mr-4 mb-4 pt-5 px-[10%] overflow-y-auto bg-[#9013d9] text-white text-xl">
	
			One of the most well known heroes of the world. Shattershot often uses her shards for mobility and general offense, as they explode and launch things around their impact zone. 
			Shattershot is identifiable by her purple color scheme, and very noticeable - foamish hair seen at the front of her mug.
			<br>
			<br>
			<br>
			<br>
			Ability 1  – Shard Throw
			<br>
			Shattershot is able to throw shards, as depicted on the left, toward anybody she deems threatening toward herself or other mugs around her. 
			These shards are small in size, and appear to be from another “world”.
			<br>
			<br>
			Ability 2  – Shard Repair
			<br>
			Shattershot can repair herself in dire need if needed to, with the shards she supplies with herself constantly. 
			Although it may not immediately repair any damages she sustains, it is enough to push through any hardships at the moment. 
			<br>
			<br>
			<br>
			<br>
			Shattershot’s shards come from a reality unknown to most mugs in this universe. 
			They appear weirdly 3-dimensional, very clearly depicting the fact that they aren’t from this world. 
			There appears to be no real limit to the amount of shards that Shattershot can use, but they do appear to be limited in how much Shattershot can hold in both hands. 


	</div>
</div>
