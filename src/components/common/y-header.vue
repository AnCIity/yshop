/**
 * @author City
 * @description 头部
 */

<template>
    <div class="y-header" :style="bgColor && {backgroundColor: bgColor}">
        <div class="left">
            <slot name="left">
                <i class="iconfont icon-left" @click="goBack"></i>
            </slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "yHeader",
    props: ["bgColor"],
    methods: {
        goBack() {
            this.$router.back(-1);
        }
    }
};
</script>

<style lang='stylus'>
.y-header
    height 0.9rem
    background-color $primary-color
    position relative
    display flex
    justify-content center
    align-items center
    color white

    .left
        position absolute
        left 0.3rem

        i
            font-size 0.5rem

    .center
        font-size 0.36rem

    .right
        position absolute
        right 0.3rem
        font-size 0.36rem

        i
            font-size 0.5rem
</style>