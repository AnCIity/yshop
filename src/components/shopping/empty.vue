/**
 * @author City
 * @description 空购物车
 */

<template>
    <div class="empty">
        <i class="iconfont icon-shopping"></i>
        <p>购物车还是空的快去逛逛吧~</p>
    </div>
</template>

<script>
export default {
    name: "empty"
};
</script>

<style lang='stylus' scoped>
.empty
    text-align center
    margin-top 4rem

    i
        font-size 1.2rem

    p
        font-size 0.32rem
        margin-top 0.3rem
</style>