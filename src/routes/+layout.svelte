<script lang="ts">
	import '../app.css';

	// --- Components ---
	import { DrawerRendered } from '@lib/components';
	import Mugcorp from '@assets/Mugcorp.svg';
	import { Flex } from 'sk-clib';
	let { children } = $props();
</script>

<div class="flex size-full flex-row">
	<DrawerRendered />

	<Flex col fill class="overflow-y-scroll no-scroll">
		{@render children()}
		<!--Footer that goes at the bottom of every page-->
	</Flex>
</div>

<footer class=" bg-primary w-full shadow-sm">
	<div class="mx-auto w-full max-w-screen-xl p-4 md:py-8">
		<div class="sm:flex sm:items-center sm:justify-between">
			<a
				href="https://flowbite.com/"
				class="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
			>
				<img src={Mugcorp} alt="Mug Corp Logo" class="h-32 w-32" />
			</a>
			<ul
				class="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
			>
				<li>
					<a href="/about/info" class="me-4 text-white hover:underline md:me-6">About</a>
				</li>
				<li>
					<a href="/Contact" class="text-white hover:underline">Contact</a>
				</li>
			</ul>
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
		<span class="block text-sm text-white sm:text-center"
			>© 2025 <a href="https://flowbite.com/" class="hover:underline">Mug Corp™</a>. All Rights
			Reserved.</span
		>
	</div>
</footer>
