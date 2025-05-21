<script lang="ts">
    import tail from "@assets/tail.png"
    import svel from "@assets/svel.png"
</script>

<!--Shows what we used to make this website possible as well as our wireframe and flowchart-->
<div class="root-grid-box grid size-full gap-x-3 bg-[#EDCFFF]">
    <!--Sveltkit, quick info about what it is and what you can do, add the Svelt logo and have it link to Sveltkit on Google-->
    <div class="flex flex-col row-start-1 col-span-1 w-[75%] ml-auto mr-auto rounded-xl bg-[#9013d9] items-center text-center self-center text-white text-xl px-10 py-10">
        <img src={svel} alt="Svelte Kit" class="w-100 mb-10">
        We used Sveltkit to create the structure of the website. It is a framework used for building applications.
        It provides tools for bundling, packaging, and running said packages. It automatically handles tasks like routing, server-side rendering, and API handling.

    </div>
    <!--Tailwind, what is tailwind, how does it work, similarities to css, add tailwind logo with a link to tailwind's site-->
    <div class="flex flex-col row-start-2 col-span-1 w-[75%] ml-auto mr-auto rounded-xl bg-[#9013d9] items-center text-center self-center text-white text-xl px-10 py-10">
        <img src={tail} alt="Tailwind" class="w-100">
        We used Tailwind to style our site. Tailwind is a CSS framework that provides a collection of pre-designed classes.
        It allows to design pages quicker and easier without having to manually deal with CSS sheets.
    </div>
    <!--Early wireframe of our site, have image, maybe a little bit of text to give context-->
    <div class="row-start-1 col-span-1 w-[75%] ml-auto mr-auto rounded-xl bg-[#9013d9] text-center self-center text-white px-10 py-10">
        We used Tailwind to style our site. Tailwind is a CSS framework that provides a collection of pre-designed classes.
        It allows to design pages quicker and easier without having to manually deal with CSS sheets.
	</div>
    <!--Image of our flowchart, it's kind of big so if possible I would like to make the image link to the actual flowchart so people could view it better-->
    <div class="row-start-2 col-span-1 w-[75%] ml-auto mr-auto rounded-xl bg-[#9013d9] text-center self-center text-white px-10 py-10">
		04
	</div>
</div>