import { defineConfig } from 'vite';
import { VitePWA as pwa } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
import manifest from './manifest.json';
import path from 'path';
import checker from 'vite-plugin-checker';

export default defineConfig({
	plugins: [
		react(),
		pwa({
			strategies: 'injectManifest',
			srcDir: '',
			filename: 'service-worker.js',
			manifest,
		}),
		checker({
			typescript: true,
			eslint: {
				lintCommand: "eslint ./src/**/*.{tsx,ts} vite.config.ts --ignore-pattern .gitignore"
			}
		})
	],
	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve(__dirname, './src') }
		]
	}
});
