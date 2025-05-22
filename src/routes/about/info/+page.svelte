<script lang="ts">
    import tail from "@assets/tail.png"
    import svel from "@assets/svel.png"
    import wire from "@assets/wire.png"
    import flow from "@assets/flow.png"
</script>

<!--Shows what we used to make this website possible as well as our wireframe and flowchart-->
<div class="root-grid-box grid size-full overflow-y-auto gap-x-3 bg-[#EDCFFF]">
    <!--Sveltkit, quick info about what it is and what you can do, add the Svelt logo and have it link to Sveltkit on Google-->
    <div class="flex flex-col row-start-1 col-span-1 w-[75%] ml-auto mr-auto rounded-xl bg-[#9013d9] items-center text-center self-center text-white text-xl px-5 py-5">
        <img src={svel} alt="Svelte Kit" class="w-100 mb-10">
        We used Sveltekit to create the structure of the website. It is a framework used for building applications.
        It provides tools for bundling, packaging, and running said packages. It automatically handles tasks like routing, server-side rendering, and API handling.

    </div>
    <!--Tailwind, what is tailwind, how does it work, similarities to css, add tailwind logo with a link to tailwind's site-->
    <div class="flex flex-col row-start-2 col-span-1 w-[75%] ml-auto mr-auto rounded-xl bg-[#9013d9] items-center text-center self-center text-white text-xl px-5 py-5">
        <img src={tail} alt="Tailwind" class="w-100 mb-10">
        We used Tailwind to style our site. Tailwind is a CSS framework that provides a collection of pre-designed classes.
        It allows to design pages quicker and easier without having to manually deal with CSS sheets.
    </div>
    <!--Early wireframe of our site, have image, maybe a little bit of text to give context-->
    <div class="flex flex-col row-start-1 col-span-1 w-[75%] ml-auto mr-auto rounded-xl mt-5 bg-[#9013d9] items-center text-center self-center text-white px-3 py-3">
        <a href="https://www.figma.com/design/CncUyxs7uuvJbiD9AVdX2V/Final-Project---Super-Heroes?node-id=0-1&t=qj0dhHl6FJTfVQRh-1" target="_blank"><img src={wire} alt="Wireframe" class="w-100 mb-10"></a>
        This was our very first rendition of our page. As you can tell, some stuff have changed like the logo being in the nav. Now it's in our footer.
        There was another rendition which is in our slides presentation. It had a different color pallate and had a star background. They were ultimately scrapped as we went for a more simple design.
        <br>
        You can click on the image to see the full wireframe.
	</div>
    <!--Image of our flowchart, it's kind of big so if possible I would like to make the image link to the actual flowchart so people could view it better-->
    <div class="flex flex-col row-start-2 col-span-1 w-[75%] ml-auto mr-auto mt-17 mb-5 rounded-xl bg-[#9013d9] items-center text-center self-center text-white px-3 py-3">
		<a href="https://www.figma.com/board/x915OD41k6D1ah2Y2ht9Oh/Final-Project---Super-Heroes?node-id=0-1&t=4RQn6QTyVSPEX8lf-1" target="_blank"><img src={flow} alt="Flowchart" class="w-80 mb-10"></a>
        This is our flowchart showing all of the navigation for the website. The colored arrows indicate primary and secondary links.
        Links through the navbar are main while ones through the footer or homepage are secondary.
        These are indicated by green (main) and red (secondary).
        <br>
        You can also click on the image to see the full flowchart.
	</div>
</div>