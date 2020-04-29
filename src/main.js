import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/reset.css"; // 重置样式表
import "./assets/css/iconfont.css"; // iconfont
import "./assets/js/rem"; // rem 布局
import "./plugins/element.js"; // 组件

import "./filters"; // 过滤器
import store from "./store"; // 状态管理器

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
