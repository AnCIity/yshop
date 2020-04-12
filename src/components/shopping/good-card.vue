/**
 * @author City
 * @description 商品卡片
 */

<template>
    <div class="good-card">
        <div class="left">
            <i
                :class="['iconfont', 'icon-all', {'cut': this.info.select}]"
                @click="change"
                v-show="!info.edit"
            ></i>
        </div>
        <div class="center">
            <div class="img">
                <img :src="info.img" width="80" />
            </div>
            <div class="chunk">
                <div class="chunk-top">
                    <h2>{{info.name | cutOut}}</h2>
                    <span>{{info.size}}</span>
                </div>
                <div class="chunk-bottom">
                    <input class="sub" type="button" value="-" @click="sub" />
                    <input class="num" type="text" v-model="num" />
                    <input class="add" type="button" value="+" @click="add" />
                </div>
            </div>
        </div>
        <div class="right">￥{{info.price}}</div>
        <div class="delete" v-show="info.edit" @click="deleteG">删除</div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "goodCard",
    props: ["info"],
    data() {
        return {
            id: {
                sid: this.info.sid,
                gid: this.info.id
            }
        };
    },
    computed: {
        num() {
            // 用于数量变化监听
            return this.info.num;
        }
    },
    methods: {
        ...mapActions("shopping", ["selectGood", "deleteGood", "calcTotal"]),
        sub() {
            // 减少 当大于 1 时
            if (this.info.num > 1) this.info.num -= 1;
        },
        add() {
            // 增加
            this.info.num += 1;
        },
        change() {
            // 修改选中状态
            this.selectGood(this.id);
            // 重新计算选中总价
            this.calcTotal();
        },
        deleteG() {
            // 删除商品
            this.deleteGood(this.id);
            // 重新计算选中总价
            this.calcTotal();
            this.$message({ message: "删除成功", type: "success" });
        }
    },
    watch: {
        num() {
            // 重新计算选中总价
            this.calcTotal();
        }
    }
};
</script>

<style lang='stylus' scoped>
.good-card
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

.right
    font-size 0.34rem
    margin-left 0.1rem

.delete
    width 1rem
    height 1.6rem
    line-height 1.6rem
    text-align center
    background-color $primary-color
    color white
    margin-left 0.28rem
    font-size 0.28rem
</style>