import { createApp } from "vue";
import App from "./App.vue";

// ROUTER
import router from "./router";
// SCSS
import "./scss/general.scss";

const app = createApp(App);

app.use(router);
app.mount("#app");
