/**
 * @author City
 * @description 搜索框
 */

<template>
    <div class="search">
        <input type="text" placeholder="Montagne jeunesse" />
        <i class="iconfont icon-search"></i>
    </div>
</template>

<script>
export default {
    name: "Search"
};
</script>

<style lang="stylus" scoped>
.search
    position relative
    width 5.15rem
    height 0.58rem
    overflow hidden
    border-radius 0.15rem
    background-color rgba(254, 218, 227, 0.8)
    color #333

    input
        position absolute
        left 0.3rem
        width 4.1rem
        height 0.58rem
        outline none
        border none
        padding 0
        font-size 0.28rem
        background-color rgba(255, 255, 255, 0)

    i
        position absolute
        top 0.1rem
        right 0.15rem

        &.icon-search
            font-size 0.45rem
</style>