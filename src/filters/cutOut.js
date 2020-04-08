/**
 * @author City
 * @description 截取文字
 */

export default (value) => {
    if (value.length < 16) {
        return value;
    } else {
        return value.slice(0, 15) + "...";
    }
};
