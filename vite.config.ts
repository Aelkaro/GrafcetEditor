import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	test: {
		exclude: ["node_modules", "dist"],
	},
	plugins: [
		vue({
			reactivityTransform: true,
		}),
	],
});
