/**
 * @author City
 * @description 购物车
 */

<template>
    <div class="exist">
        <div class="inner">
            <shop-card v-for="item in info" :key="item.id" :info="item"></shop-card>
        </div>
        <div class="bottom">
            <div class="option" @click="selectAll(!isAll)">
                <i :class="['iconfont', 'icon-all',{'cut': isAll}]"></i>
                <span>全选</span>
            </div>
            <div class="option" @click="editGood()">
                <i :class="['iconfont', 'icon-edit',{'cut': isEdit}]"></i>
                <span>编辑</span>
            </div>
            <div class="total">
                <span>合计：{{total | fixed}}</span>
                <p>（不含运费）</p>
            </div>
            <div class="sittle">去结算</div>
        </div>
    </div>
</template>

<script>
import shopCard from "@/components/shopping/shop-card";
import { mapGetters, mapActions } from "vuex";

export default {
    name: "exist",
    props: ["info"],
    components: {
        shopCard
    },
    computed: {
        ...mapGetters("shopping", ["isAll", "isEdit", "total"])
    },
    methods: {
        ...mapActions("shopping", ["selectAll", "editGood"])
    }
};
</script>

<style lang="stylus" scoped>
.exist
    position relative
    padding-bottom 3rem

    .bottom
        width 7.5rem
        height 1.12rem
        border-top 3px solid #eee
        position fixed
        bottom 1rem
        background-color white

        .option
            float left
            margin 0.1rem 0.4rem
            text-align center

            i
                display block
                font-size 0.5rem
                color #ccc
                margin-bottom 0.12rem

                &.cut
                    color $primary-color

            span
                font-size 0.26rem
                color #666

        .total
            float left
            color #bbb
            line-height 0.26rem
            font-size 0.14rem
            text-align center
            margin-left 0.35rem
            margin-top 0.3rem

        .sittle
            position absolute
            top -0.03rem
            right 0
            width 2.32rem
            height 1.15rem
            line-height 1.12rem
            background-color #ff5500
            color white
            text-align center
            font-size 0.35rem
            letter-spacing 2px
</style>