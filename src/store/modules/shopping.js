/**
 * @author City
 * @description 购物车模块
 */

const state = {
    // 购物车数据
    data: []
};

const mutations = {
    setData(state, value) {
        // 初始化数据
        value.forEach(element => {
            element.list.forEach(element => {
                element.select = false;
            });
        });

        state.data = value;
    },
    // 全选
    selectAll(state, value) {
        state.data.forEach(element => {
            element.list.forEach(element => {
                element.select = value;
            });
        });
    }
};

const actions = {
    // 请求数据
    getData({ commit }) {
        const arr = [
            {
                id: 1,
                name: "杭州保税仓",
                list: [
                    {
                        id: 3241,
                        name: "ChildLife/童年时光婴儿车这里看不见",
                        img: require("@/assets/images/classifg/class.png"),
                        num: 1,
                        price: 188,
                        size: "一件装",
                        select: false
                    }
                ]
            },
            {
                id: 2,
                name: "杭州保税仓",
                list: [
                    {
                        id: 2341,
                        name: "ChildLife/童年时光婴儿车这里看不见",
                        img: require("@/assets/images/classifg/class.png"),
                        num: 1,
                        price: 188,
                        size: "一件装",
                        select: false
                    },
                    {
                        id: 2342,
                        name: "ChildLife/童年时光婴儿车这里看不见",
                        img: require("@/assets/images/classifg/class.png"),
                        num: 1,
                        price: 188,
                        size: "一件装",
                        select: false
                    }
                ]
            }
        ];
        commit("setData", arr);
    },
    // 全选
    selectAll({ commit }, value) {
        commit("selectAll", value);
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
