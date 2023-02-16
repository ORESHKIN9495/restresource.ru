import { createApp } from "vue";

import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import store from "./store";

const pinia = createPinia();

createApp(App).use(router).use(store).mount("#app");
