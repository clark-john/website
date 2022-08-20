import { defineConfig } from 'vite';
import { VitePWA as pwa } from 'vite-plugin-pwa';
import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import manifest from './manifest.json';
import path from 'path';

export default defineConfig({
	plugins: [
		eslint(),
		react(),
		pwa({
			strategies: 'injectManifest',
			srcDir: '',
			filename: 'service-worker.js',
			manifest,
		}),
	],
	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve(__dirname, './src') }
		]
	}
});
