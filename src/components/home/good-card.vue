/**
 * @author City
 * @description 栏目商品卡片
 */

<template>
    <div class="good-card">
        <div class="img">
            <img :src="info.thumbnail" alt />
        </div>
        <h3>{{info.name | cutOut}}</h3>
        <p>
            ￥{{info.reduct_price | fixed}}
            <span>￥{{info.original_price | fixed}}</span>
        </p>
    </div>
</template>

<script>
export default {
    name: "goodCard",
    props: ["info"]
};
</script>

<style lang="stylus" scoped>
.good-card
    display inline-block
    margin-right 0.25rem
    border 2px solid #f3f3f3
    width 3.26rem
    height 4.66rem
    overflow hidden

    .img
        width 100%
        height 3rem
        overflow hidden
        text-align center
        vertical-align middle

        img
            width 3.26rem
            height 3rem

    h3
        white-space normal
        height 0.9rem
        line-height 0.45rem
        overflow hidden
        padding 0.1rem 0.2rem
        font-size 0.28rem

    p
        color $primary-color
        padding 0 0.2rem
        font-size 0.3rem

        span
            color #888
            float right
</style>

