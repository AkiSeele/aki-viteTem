import { createApp } from 'vue'
import { createPinia } from "pinia";
import './style.css'
import App from './App.vue'
import router from "@/router";
import "virtual:svg-icons-register";
import SvgIcon from "@/components/SvgIcon.vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const app = createApp(App)
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

app.use(router).use(pinia);

app.component("svg-icon", SvgIcon);

app.mount("#app");
