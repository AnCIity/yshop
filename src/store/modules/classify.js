/**
 * @author City
 * @description 分类模块
 */

import { requestClassify } from "@/api";

const state = {
    // 分类数据
    data: [],
    // 当前分类
    select: "",
    // 展示分类
    sort: []
};

const mutations = {
    setData(state, value) {
        state.data = value;
    },
    setSelect(state, value) {
        state.select = value;
    },
    setSort(state, value) {
        state.sort = value;
    }
};

const actions = {
    // 请求分类数据
    getData({ commit, state }) {
        requestClassify().then(res => {
            if (state.data.length > 0) return;
            commit("setData", res.data.data);

            // 初始化分类内容
            commit("setSort", res.data.data[0].list);
            commit("setSelect", res.data.data[0].name);
        });
    },
    // 切换分类
    cutSort({ commit }, item) {
        commit("setSort", item.list);
        commit("setSelect", item.name);
    }
};

const getters = {
    data(state) {
        return state.data;
    },
    select(state) {
        return state.select;
    },
    sort(state) {
        return state.sort;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
