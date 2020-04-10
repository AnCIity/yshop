/**
 * @author City
 * @description 首页模块
 */

import { requestHome } from "@/api";

const state = {
    data: []
};

const mutations = {
    setData(state, value) {
        state.data = value;
    }
};

const actions = {
    // 请求首页数据
    getData({ commit, state }) {
        requestHome().then(res => {
            if (state.data.length > 0) return;
            commit("setData", res.data.data);
        });
    }
};

const getters = {
    data(state) {
        return state.data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
