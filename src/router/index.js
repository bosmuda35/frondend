import { createRouter, createWebHistory } from "vue-router";
import AdminView from "../views/AdminView.vue";
import DaftarProdukView from "../views/DaftarProdukView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/daftarproduk", component: DaftarProdukView },
  { path: "/admin", component: AdminView },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
