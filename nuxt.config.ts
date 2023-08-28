import manifest from "./manifest.json";

export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: false,
	css: ["@/styles/tailwind.scss"],
	postcss: {
		plugins: {
			autoprefixer: {},
			tailwindcss: {}
		}
	},
	modules: ["@vite-pwa/nuxt", "@nuxtjs/google-fonts", "@nuxt/image"],
	pwa: {
		// copied some things from my previous vite.config.ts' pwa config
		strategies: "injectManifest",
		srcDir: "",
		filename: "service-worker.js",
		manifest,
		injectRegister: "auto",
		manifestFilename: "manifest.json"
	},
	googleFonts: {
		families: {
			Raleway: {
				wght: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => x * 100)
			},
			"Roboto Mono": true,
			Inter: true
		}
	},
	experimental: {
		payloadExtraction: false
	}
});
