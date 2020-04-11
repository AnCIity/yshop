/**
 * @author City
 * @description Vuex 状态管理统一出口
 */

import Vue from "vue";
import Vuex from "vuex";

// 引入模块
import home from "./modules/home";
import classify from "./modules/classify";
import user from "./modules/user";
import shopping from "./modules/shopping";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        home,
        classify,
        user,
        shopping
    }
});
