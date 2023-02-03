<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MainView from "./views/MainView.vue";
</script>

<template>
	<!-- <RouterLink to="/">Home</RouterLink>
	<RouterLink to="/settings">Settings</RouterLink> -->
	<div class="menuBarContainer">COUCOU c'est la navbar qui est une div</div>
	<div class="sideBarContainer"></div>
	<div class="view">
		<MainView />
	</div>
</template>

<style>
#app {
	font-family: Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	color: aliceblue;
}
.menuBarContainer {
	background-color: rgb(48, 45, 45);
	min-height: 64px;
}
.sideBarContainer {
	background-color: rgb(48, 45, 45);
	min-height: 1080px;
	min-width: 64px;
	max-width: 64px;
}
</style>
