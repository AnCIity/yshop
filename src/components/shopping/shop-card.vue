/**
 * @author City
 * @description 店铺卡片
 */

<template>
    <div class="shop-card">
        <h3>
            <i class="iconfont icon-shop"></i>
            <span>{{ info.name }}</span>
        </h3>
        <div class="content">
            <good-card v-for="item in info.list" :key="item.id" :info="item" :calc="calc"></good-card>
        </div>
    </div>
</template>

<script>
import goodCard from "./good-card";

export default {
    name: "shopCard",
    props: {
        info: {
            type: Object
        },
        calc: {
            type: Function
        }
    },
    components: {
        goodCard
    }
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
</style>