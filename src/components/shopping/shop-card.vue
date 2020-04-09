/**
 * @author City
 * @description 店铺商品卡片
 */

<template>
    <div class="shop-card">
        <h3>
            <i class="iconfont icon-shop"></i>
            <span>杭州保税仓</span>
        </h3>
        <div class="content">
            <div class="left">
                <i :class="['iconfont', 'icon-all', {'cut': isSelect}]" @click="isSelect=!isSelect"></i>
            </div>
            <div class="center">
                <div class="img">
                    <img :src="img" width="80" />
                </div>
                <div class="chunk">
                    <div class="chunk-top">
                        <h2>{{"ChildLife/童年时光婴儿奶粉这里看不见" | cutOut}}</h2>
                        <span>90粒装</span>
                    </div>
                    <div class="chunk-bottom">
                        <input class="sub" type="button" value="-" />
                        <input class="num" type="text" v-model="num" />
                        <input class="add" type="button" value="+" />
                    </div>
                </div>
            </div>
            <div class="right">￥188</div>
            <div class="delete">删除</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "shopCard",
    data() {
        return {
            isSelect: false,
            num: 1,
            img: require("@/assets/images/classifg/class.png")
        };
    },
    components: {}
};
</script>

<style lang="stylus" scoped>
.shop-card
    padding-left 0.2rem
    padding-bottom 0.3rem
    overflow hidden

    &:nth-child(even)
        background-color #f7f7f7

    h3
        color #aaaaaa
        font-size 0.3rem
        margin 0.3rem 0

        i
            display inline-block
            font-size 0.4rem
            margin-left 0.2rem
            margin-right 0.3rem

        span
            letter-spacing 2px

    .content
        height 1.6rem
        padding 0.2rem 0 0.2rem 0.2rem
        display flex
        align-items center

        .left
            margin-right 0.2rem

            i
                font-size 0.45rem

                &.cut
                    color $primary-color

        .center
            height 1.6rem
            display flex

            .img
                margin-right 0.2rem

                img
                    width 1.57rem
                    height 1.57rem

            .chunk
                position relative

                .chunk-top
                    position relative
                    width 2.84rem
                    line-height 0.4rem

                    h2
                        font-size 0.32rem

                    span
                        position absolute
                        bottom -0.02rem
                        right 0.85rem
                        color #999999
                        font-size 0.26rem

                .chunk-bottom
                    position absolute
                    bottom 0.02rem

        .right
            font-size 0.34rem
            margin-left 0.1rem

        .delete
            display none
            width 1rem
            height 1.6rem
            line-height 1.6rem
            text-align center
            background-color $primary-color
            color white
            margin-left 0.48rem

    .chunk-bottom
        .sub
            border-right none

        .add
            border-left none

        input
            border 1px solid #cccccc
            outline none
            text-align center
            width 0.75rem
            line-height 0.38rem

        input[type=button]
            background-color white
</style>