import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vant from "./components/vant";
Vue.config.productionTip = false;
Vue.use(vant);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
