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
	modules: ["@vite-pwa/nuxt", "@nuxtjs/google-fonts"],
	pwa: {
		strategies: "injectManifest",
		srcDir: "",
		filename: "service-worker.js",
		// @ts-ignore
		manifest,
		injectRegister: "auto",
		manifestFilename: "manifest.json"
	},
	googleFonts: {
		families: {
			Comfortaa: true
		}
	},
	experimental: {
		payloadExtraction: false
	},
	prerender: {
		ignore: ["^#"]
	}
});
