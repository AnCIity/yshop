/**
 * @author City
 * @description 过滤器注册
 */

import Vue from "vue";

import cutOut from "./cutOut";
import fixed from "./fixed";

Vue.filter("cutOut", cutOut);
Vue.filter("fixed", fixed);
