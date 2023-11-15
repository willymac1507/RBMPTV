import { createApp, h } from "vue";
import "./style.css";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Home from "./components/home/Home.vue";
import AboutUs from "./components/about/AboutUs.vue";
import Services from "./components/services/Services.vue";
import Contact from "./components/contact/Contact.vue";
import Appliances from "./components/appliances/Appliances.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: AboutUs,
  },
  {
    path: "/services",
    component: Services,
  },
  {
    path: "/appliances",
    component: Appliances,
  },
  {
    path: "/contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp({
  render: () => h(App),
});

app.use(router);

app.mount("#app");
