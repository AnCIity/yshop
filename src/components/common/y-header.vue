/**
 * @author City
 * @description 头部
 */

<template>
    <div class="y-header" :style="bgColor && {backgroundColor: bgColor}">
        <slot>
            <div class="left">
                <i class="iconfont icon-left"></i>
            </div>
            <div class="center">购物车</div>
            <!-- <div class="right">right</div> -->
            <!-- .right
        position absolute
            right 0.42rem-->
        </slot>
    </div>
</template>

<script>
export default {
    name: "yHeader",
    props: ["bgColor"]
};
</script>

<style lang='stylus' scoped>
.y-header
    height 0.9rem
    background-color $primary-color
    position relative
    display flex
    justify-content center
    align-items center

    .left
        position absolute
        left 0.42rem

        i
            color white
            font-size 0.4rem

    .center
        color white
        font-size 0.4rem
</style>