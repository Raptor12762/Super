<script lang="ts">
	import SmartpotPortrait from "@assets/smartpot.png"

	import { Portrait } from "@lib/components";
	import { Frame } from "sk-clib";
	
</script>

<!--Image with header fro character name, make sure it's centered to the box-->
<div class="grid size-full grid-flow-col grid-rows-3 gap-4 bg-[#99c0ff]">
	<div class=" flex justify-center col-span-1 row-span-2 mt-4 ml-4 overflow-hidden pt-10 bg-[#4384EB] text-white">
		<Portrait.Smartpot src={SmartpotPortrait} class="h-[50vh]" name="Smartpot"/>
	</div>
<!--This is the table to add strengths and weaknesses, just add on to it-->
	<div class=" flex justify-center items-center col-span-1 mb-4 ml-4 overflow-auto bg-[#4384EB]">
		<table class="w-[75%] border-2 p-2 bg-[#99c0ff]">
			<thead>
				<tr class="border-1">
					<th class="border-1">Strengths</th>
					<th class="border-1">Weaknesses</th>
				</tr>
			</thead>
			<tbody class="text-center">
				<tr>
					<td class="border-1">Stupidly Quick</td>
					<td class="border-1">No Unique Abilities</td>
				</tr>
				<tr>
					<td class="border-1">Extremely Smart</td>
				</tr>
				<tr>
					<td class="border-1">Rich (For some reason)</td>
				</tr>
			</tbody>
		</table>
	</div>
<!--This explains the lore, you cann add picture at bottom if you want, up to you. Mostly text though-->
	<div class=" flex justify-center row-span-3 mt-4 mr-4 mb-4 pt-10 px-[10%] overflow-y-auto bg-[#4384EB] text-white">
		<Frame class="w-[80%] text-xl">
            Smart Pots are probably the most boring group out of the Villains of the world, as they usually provide either funding or planning for various schemes or heists. They themselves do not have any unique abilities, outside of their sheer speed and their smart minds. There are tens, if not thousands of Smartpots roaming around in dark quarters, studying various buildings and people for their weaknesses, their plans, essentially everything about everyone around the world.
            <br>
            <br>
            Smartpots are oftentimes seen in glasses and graduation caps, to promote their “mind” abilities and techniques. Also, for seemingly no reason, their knowledge ties into how blue their body looks. The bluest of Smartpots are the masterminds of most operations, while light-blue Smart Pots.
        </Frame>
	</div>
</div>