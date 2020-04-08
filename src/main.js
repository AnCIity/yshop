import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "../public/css/reset.css"; // 重置样式表
import "../public/css/icon/main.css"; // iconfont
import "../public/js/rem"; // rem

import "./filters"; // 过滤器

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
