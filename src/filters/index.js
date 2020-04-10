/**
 * @author City
 * @description 过滤器注册
 */
import Vue from "vue";

import cutOut from "./cutOut";
import fixed from "./fixed";

// 过滤器
// Vue.filter("capitalize", function(value) {
//     if (!value) return "";
//     value = value.toString();
//     return value.charAt(0).toUpperCase() + value.slice(1);
// });

Vue.filter("cutOut", cutOut);
Vue.filter("fixed", fixed);
