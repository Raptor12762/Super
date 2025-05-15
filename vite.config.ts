import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import { promises as fs } from 'node:fs'

// Loader Helper
import { FileSystemIconLoader } from "unplugin-icons/loaders"

const IconInstance = Icons({
	compiler: 'svelte',
	autoInstall: true,
	customCollections: {
		'my-images': {
			// load your custom icon lazily
			mugicon: () => fs.readFile('./src/assets/mugicon.svg', 'utf-8'),
			teapoticon: () => fs.readFile('./src/assets/teapoticon.svg', 'utf-8'),
		}
	}
})

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), IconInstance]
});
