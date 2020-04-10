import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "../public/css/reset.css"; // 重置样式表
import "../public/css/icon/main.css"; // iconfont
import "../public/js/rem"; // rem 布局
import "./plugins/element.js"; // 组件

import "./filters"; // 过滤器
import store from "./store"; // 状态管理器

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
