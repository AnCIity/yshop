/**
 * @author City
 * @description 首页模块
 */

import { requestHome } from "@/api";

const state = {
    // 首页数据
    data: []
};

const mutations = {
    setData(state, value) {
        // 匹配图标
        value.forEach(element => {
            switch (element.name) {
                case "今日疯抢":
                    element.icon = "icon-hot";
                    element.color = "color: #ff9900";
                    break;
                case "母婴专区":
                    element.icon = "icon-baby";
                    element.color = "color: #00b49d";
                    break;
                case "美妆护肤":
                    element.icon = "icon-beauty";
                    element.color = "color: #b73a5e";
                    break;
                case "家具生活":
                    element.icon = "icon-lvzhi";
                    element.color = "color: #023544";
                    break;
                case "营养食品":
                    element.icon = "icon-foot";
                    element.color = "color: #f94a16";
                    break;
                case "全球直邮":
                    element.icon = "icon-fly";
                    element.color = "color: #218739";
                    break;
                default:
                    break;
            }
        });
        state.data = value;
    }
};

const actions = {
    // 请求首页数据
    getData({ commit, state }) {
        if (state.data.length > 0) return;
        requestHome().then(res => {
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
