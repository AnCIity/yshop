/**
 * @author City
 * @description 购物车模块
 */

const state = {
    // 购物车数据
    data: [],
    // 商品数量
    num: 0,
    // 选中数量
    selectNum: 0,
    // 选中商品价格
    total: 0,
    // 编辑状态
    isEdit: false,
    // 初始化
    isInit: true
};

const mutations = {
    // 初始化数据
    setData(state, value) {
        value.forEach(shop => {
            shop.list.forEach(good => {
                good.select = false;
                good.edit = false;
                state.num++;
            });

            state.data.push(shop);
        });
    },
    // 全选商品 反之亦然
    selectAll(state, value) {
        state.data.forEach(shop => {
            shop.list.forEach(good => {
                good.select = value;
                // 计算选中数量 以及编辑状态
                if (value) {
                    state.selectNum = state.num;
                    if (state.isEdit) good.edit = true;
                } else {
                    state.selectNum = 0;
                    if (state.isEdit) good.edit = false;
                }
            });
        });
    },
    // 选中商品
    selectGood(state, { sid, gid }) {
        let shop = state.data.find(value => value.id === sid);
        let good = shop.list.find(value => value.id === gid);

        // 修改状态
        good.select = !good.select;

        // 计算选中数量 以及编辑状态
        if (good.select) {
            state.selectNum++;
            if (state.isEdit) good.edit = true;
        } else {
            state.selectNum--;
            if (state.isEdit) good.edit = false;
        }
    },
    // 编辑商品 反之亦然
    editGood(state) {
        state.isEdit = !state.isEdit;
        state.data.forEach(shop => {
            shop.list.forEach(good => {
                if (good.select) {
                    good.edit = state.isEdit;
                }
            });
        });
    },
    // 删除商品
    deleteGood(state, { sid, gid }) {
        state.data.forEach((shop, index, arr) => {
            if (shop.id == sid) {
                shop.list.forEach((good, indexG, arrG) => {
                    if (good.id == gid) {
                        // 计算选中数量
                        if (good.select) state.selectNum--;

                        // 减少商品数量
                        state.num--;

                        // 删除商品
                        arrG.splice(indexG, 1);

                        // 如果店铺只有一个商品 删除店铺
                        if (arrG.length == 0) arr.splice(index, 1);
                    }
                });
            }
        });
    },
    // 计算选中价格
    calcTotal(state) {
        state.total = 0;
        state.data.forEach(shop => {
            shop.list.forEach(good => {
                if (good.select) {
                    state.total += good.price * good.num;
                }
            });
        });
    },
    // 加入购物车
    addShopping(state, info) {
        // 查询店铺是否存在 存在则返回店铺
        let shop = state.data.find(value => value.id === 666);

        if (shop) {
            let good = shop.list.find(value => value.id == info.id);
            if (good) {
                good.num++;
                this.commit("shopping/calcTotal");
            } else {
                shop.list.push(info);
                // 增加商品数量
                state.num++;
            }
        } else {
            shop = {
                id: 666,
                name: "不配拥有店铺的商品",
                list: [info]
            };

            state.data.push(shop);
            // 增加商品数量
            state.num++;
        }
    }
};

const actions = {
    // 请求数据
    getData({ commit, state }) {
        if (!state.isInit) return;
        state.isInit = false;

        const arr = [
            {
                id: 1,
                name: "杭州保税仓",
                list: [
                    {
                        id: 3241,
                        sid: 1,
                        name: "ChildLife/童年时光婴儿车这里看不见",
                        img: require("@/assets/images/classifg/class.png"),
                        num: 1,
                        price: 188,
                        size: "一件装"
                    }
                ]
            },
            {
                id: 2,
                name: "杭州保税仓",
                list: [
                    {
                        id: 2341,
                        sid: 2,
                        name: "ChildLife/童年时光婴儿车这里看不见",
                        img: require("@/assets/images/classifg/class.png"),
                        num: 1,
                        price: 188,
                        size: "一件装"
                    },
                    {
                        id: 2342,
                        sid: 2,
                        name: "ChildLife/童年时光婴儿车这里看不见",
                        img: require("@/assets/images/classifg/class.png"),
                        num: 1,
                        price: 188,
                        size: "一件装"
                    }
                ]
            }
        ];
        commit("setData", arr);
    },
    // 全选
    selectAll({ commit }, value) {
        commit("selectAll", value);
    },
    // 选中
    selectGood({ commit }, value) {
        commit("selectGood", value);
    },
    // 编辑
    editGood({ commit }) {
        commit("editGood");
    },
    // 删除
    deleteGood({ commit }, value) {
        commit("deleteGood", value);
    },
    // 计算
    calcTotal({ commit }) {
        commit("calcTotal");
    },
    // 加入购物车
    addShopping({ commit }, info) {
        commit("addShopping", info);
    }
};

const getters = {
    // 数据
    data(state) {
        return state.data;
    },
    // 计算全选
    isAll(state) {
        return state.num === state.selectNum;
    },
    // 编辑状态
    isEdit(state) {
        return state.isEdit;
    },
    // 选中价格
    total(state) {
        return state.total;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
