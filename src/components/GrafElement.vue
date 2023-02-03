<script setup lang="ts">
import { ref } from "vue";
import { grafElement } from "../assets/constants";

interface Props {
	item: grafElement;
}

const { item } = defineProps<Props>();
</script>

<template>
	<div>{{ item.name }}</div>
</template>

<style scoped></style>
