/**
 * @author City
 * @description 分类卡片
 */

<template>
    <div class="class-card">
        <div class="img">
            <img :src="info.thumbnail" alt />
        </div>
        <div class="title">
            <span>{{info.name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "classCard",
    props: ["info"]
};
</script>

<style lang='stylus' scoped>
.class-card
    float left
    position relative
    width 2.24rem
    height 2.36rem
    border 2px solid $minor-color
    margin 0.1rem

    .img
        width 100%
        text-align center

        img
            width 1.65rem
            height 1.67rem
            margin-top 0.19rem

    .title
        position absolute
        bottom 0
        width 100%
        height 0.46rem
        line-height 0.46rem
        background-color $minor-color
        color white
        text-align center
        font-size 0.26rem
        letter-spacing 0.04rem
</style>