import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	test: {
		coverage: {
			reporter: ["text"],
		},
	},
	plugins: [vue()],
});
