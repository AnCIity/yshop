/**
 * @author City
 * @description filing模块接口列表
 */

import base from "./base"; // 导入接口域名列表
import axios from "@/utils/http"; // 导入http中创建的axios实例
// import qs from "qs"; // 根据需求导入qs模块，序列化post数据

const filing = {
    // 归档菜单
    Menu() {
        return axios.get(`${base.anLink}/menu`);
    },
    // 归档列表
    List() {
        return axios.get(`${base.anLink}/list`);
    },
    // 新闻详情,演示
    // articleDetail (id, params) {
    //     return axios.get(`${base.sq}/topic/${id}`, {
    //         params: params
    //     });
    // },
    // // post提交
    // login (params) {
    //     return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));
    // }
};

export default filing;
