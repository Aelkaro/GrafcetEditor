import MainView from "../views/MainView.vue";
import Settings from "../views/Settings.vue";

export default [
	{
		path: "/",
		component: MainView,
		props: true,
	},
	{
		path: "/settings",
		component: Settings,
		props: true,
	},
];
