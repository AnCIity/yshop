/**
 * @author City
 * @description api接口的通一出口
 */

import base from "./base";
import axios from "@/utils/http";

// 首页数据
export const requestHome = function() {
    return axios.get(`${base.link}getIndexData`);
};

// 分类数据
export const requestClassify = function() {
    return axios.get(`${base.link}getClassify`);
};

// 详情
export const detail = function(id) {
    return axios.get(`${base.link}getDetails`, { params: { pid: id } });
};

// 登录 { phone, password }
export const requestLogin = function(data) {
    return axios.get(`${base.link}login`, { params: data });
};

// 注册 { phone, password }
export const requestRegister = function(data) {
    return axios.post(`${base.link}register`, data);
};
