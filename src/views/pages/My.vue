/**
 * @author City
 * @description 我
 */

<template>
    <div class="my">
        <y-header>
            <template v-slot:left>
                <i class="iconfont icon-setting"></i>
            </template>
            <template v-slot:center>个人中心</template>
            <template v-slot:right>
                <i class="iconfont icon-comment">
                    <span class="num" v-if="isLogin">9+</span>
                </i>
            </template>
        </y-header>

        <div class="banner">
            <div class="photo">
                <img class="img" src="../../assets/user.jpg" v-if="isLogin" />
                <div class="img" v-else></div>
            </div>
        </div>

        <div class="info">
            <router-link to="/login" tag="h3">{{ isLogin ? "诺曦惜颜惜诺轩" : "点击登录" }}</router-link>
            <div class="column">
                <i class="iconfont icon-like"></i>
                <p>我的收藏</p>
                <span v-if="isLogin">（5）</span>
            </div>
        </div>

        <div class="order">
            <div class="title">
                <p>我的订单</p>
                <span>查看全部订单</span>
            </div>
            <div class="sort">
                <ul>
                    <li>
                        <i class="iconfont icon-pay"></i>
                        <p>待付款</p>
                    </li>
                    <li>
                        <i class="iconfont icon-send">
                            <span class="num" v-if="isLogin">1</span>
                        </i>
                        <p>待发货</p>
                    </li>
                    <li>
                        <i class="iconfont icon-deliver">
                            <span class="num" v-if="isLogin">2</span>
                        </i>
                        <p>待收货</p>
                    </li>
                    <li>
                        <i class="iconfont icon-bianji"></i>
                        <p>待评价</p>
                    </li>
                    <li>
                        <i class="iconfont icon-tuikuan"></i>
                        <p>退款/售后</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="side">收货地址管理</div>
    </div>
</template>

<script>
import yHeader from "@/components/common/y-header";
import { mapGetters } from "vuex";

export default {
    name: "My",
    components: {
        yHeader
    },
    computed: {
        ...mapGetters("user", ["isLogin"])
    }
};
</script>

<style lang="stylus" scoped>
.num
    position absolute
    right -0.2rem
    top -0.1rem
    background-color red
    border-radius 50%
    width 0.35rem
    height 0.35rem
    line-height 0.35rem
    text-align center
    font-size 0.12rem
    color white

.my
    padding-bottom 1.2rem
    min-height 100vh
    background-color #f3f3f3

    .banner
        height 2.3rem
        background-color $primary-color
        position relative

        .photo
            width 2.08rem
            height @width
            background-color white
            border-radius 50%
            overflow hidden
            position absolute
            bottom -0.8rem
            left calc((5.42rem / 2))

            .img
                width 1.8rem
                height @width
                margin-top 0.14rem
                margin-left 0.14rem
                background-color #e6dfdf
                border-radius 50%

    .info
        height 2.6rem
        background-color #fafafa
        overflow hidden

        h3
            text-align center
            margin-top 1.1rem
            font-size 0.3rem

        .column
            display flex
            line-height 0.5rem
            padding-left 0.35rem
            margin-top 0.4rem

            i
                font-size 0.4rem
                color #ec605b

            p
                font-size 0.3rem
                margin-left 0.2rem

            span
                font-size 0.3rem
                margin-left 0.05rem

    .order
        margin-top 0.15rem
        background-color #fafafa

        .title
            border-bottom 1px solid #d7d7d7
            padding-left 0.35rem
            height 1.24rem
            line-height 1.24rem
            font-size 0.32rem

            p
                float left

            span
                float right
                color #9e9e9e
                margin-right 0.2rem

        .sort
            height 1.9rem

            ul
                display flex
                text-align center

                li
                    width 20%
                    height 1.9rem
                    padding-top 0.4rem

                    i
                        position relative
                        font-size 0.7rem
                        color #aaaaaa

                    p
                        color #6e6e6e
                        font-size 0.24rem
                        margin-top 0.2rem

    .side
        margin-top 0.15rem
        padding-left 0.45rem
        background-color #fafafa
        font-size 0.3rem
        height 1.27rem
        line-height 1.27rem
        color #999999
</style>