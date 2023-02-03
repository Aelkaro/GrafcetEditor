<script setup lang="ts">
import { grafElement } from "../assets/constants";
import GrafElement from "../components/GrafElement.vue";

let elements: Array<grafElement> = $ref(Array());

const addStep = (): void => {
	elements.push({ id: 0, name: "Item", type: "step" });
};
</script>

<template>
	<ul>
		<li v-for="element in elements">
			<GrafElement :item="element" />
		</li>
	</ul>
	<button @click="addStep">Add Step</button>
</template>

<style scoped></style>
