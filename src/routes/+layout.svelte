<script lang="ts">
	import '../app.css';

    // --- Components ---
    import {DrawerRendered} from "@lib/components"
    import Mugcorp from "@assets/Mugcorp.svg";
	let { children } = $props();
</script>

<div class="flex flex-row size-full">
    <DrawerRendered/>

	{@render children()}
</div>


<!--Footer that goes at the bottom of every page-->
<footer class=" shadow-sm w-full bg-primary">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={Mugcorp} alt="Mug Corp Logo" class="w-32 h-32">
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/about/info" class="hover:underline me-4 md:me-6 text-white">About</a>
                </li>
                <li>
                    <a href="/Contact" class="hover:underline text-white">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm sm:text-center text-white">© 2025 <a href="https://flowbite.com/" class="hover:underline">Mug Corp™</a>. All Rights Reserved.</span>
    </div>
</footer>