import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css"; //menambahkan main css untuk tailwind
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
