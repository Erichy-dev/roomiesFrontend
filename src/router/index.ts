import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MessagesViewVue from "@/views/MessagesView.vue";
import ViewMessage from "@/views/ViewMessage.vue";
import HelpView from "@/views/HelpView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/help",
      name: "help",
      component: HelpView,
    },
    {
      path: "/messages",
      name: "messages",
      component: MessagesViewVue,
    },
    {
      path: "/viewMessage",
      name: "viewMessage",
      component: ViewMessage,
    },
  ],
});

export default router;
