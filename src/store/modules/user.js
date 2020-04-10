/**
 * @author City
 * @description 用户模块
 */

import { requestLogin } from "@/api";

const state = {
    // 是否登录
    isLogin: false
};

const mutations = {
    setLogin(state, value) {
        state.isLogin = value;
    }
};

const actions = {
    // 请求登录
    async login({ commit }, data) {
        const { data: result } = await requestLogin(data);
        if (result.status === 1) {
            // 登录成功
            commit("setLogin", true);
        } else {
            // 登录失败
            commit("setLogin", false);
        }

        // 返回请求结果信息
        return result.msg;
    }
};

const getters = {
    isLogin(state) {
        return state.isLogin;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
