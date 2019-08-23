import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import VueHighlightJS from "vue-highlightjs";

// Tell Vue.js to use vue-highlightjs

Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/hightlight_theme.css";
import "./assets/hightlight_dracula.css";

Vue.use(VueHighlightJS);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
