import { createApp } from "vue";
import { createPinia } from "pinia";

// @ts-ignore-next-line
import App from "./App.vue";
import router from "./router";

import "./index.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faMessage,
  faDeleteLeft,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";

library.add(faMessage, faDeleteLeft, faSearchLocation);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
