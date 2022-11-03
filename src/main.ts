import { createApp } from 'vue'
import { createPinia } from "pinia";
import './style.css'
import App from './App.vue'
import router from "@/router";
import "virtual:svg-icons-register";
import SvgIcon from "@/components/SvgIcon.vue";

const app = createApp(App)

app.use(router).use(createPinia());

app.component("svg-icon", SvgIcon);

app.mount("#app");
