/**
 * @author City
 * @description 导航栏
 */

<template>
    <div class="navigation">
        <router-link to="/" exact-active-class="cut">
            <i class="iconfont icon-home"></i>
            <span>首页</span>
        </router-link>
        <router-link to="/classify" exact-active-class="cut">
            <i class="iconfont icon-classify"></i>
            <span>分类</span>
        </router-link>
        <router-link to="/shopping" exact-active-class="cut">
            <i class="iconfont icon-shopping"></i>
            <span>购物车</span>
        </router-link>
        <router-link to="/my" exact-active-class="cut">
            <i class="iconfont icon-my"></i>
            <span>我</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Navigation"
};
</script>

<style lang="stylus" scoped>
.navigation
    width 7.5rem
    height 0.98rem
    position fixed
    bottom 0
    background-color white
    border-top 0.02rem solid #eeeeee
    text-align center
    display flex

    a
        position relative
        width 25%
        height 1rem
        color #333

        &.cut
            color $primary-color

        i
            display block
            font-size 0.4rem
            margin-top 0.1rem

        span
            width 100%
            position absolute
            left 0
            bottom 0.16rem
</style>