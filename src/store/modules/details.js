/**
 * @author City
 * @description 详情模块
 */

import { requestDetails } from "@/api";

const state = {
    // 首页数据
    data: {}
};

const mutations = {
    setData(state, value) {
        state.data = value;
    }
};

const actions = {
    // 请求详情数据
    getData({ commit, state }, id) {
        // 若数据重复 无需请求
        if (state.data.pid == id) return;

        requestDetails(id).then(res => {
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
