/**
 * @author City
 * @description 商品卡片
 */

<template>
    <div class="good-card">
        <div class="left">
            <i :class="['iconfont', 'icon-all', {'cut': isSelect}]" @click="change"></i>
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
        <div class="delete">删除</div>
    </div>
</template>

<script>
export default {
    name: "goodCard",
    props: {
        info: {
            type: Object
        },
        calc: {
            type: Function
        }
    },
    data() {
        return {
            num: this.info.num
        };
    },
    computed: {
        isSelect() {
            // 计算选中状态
            return this.info.select;
        },
        total() {
            // 计算总价
            return this.info.price * this.num;
        }
    },
    methods: {
        sub() {
            if (this.num <= 1) return;

            this.num -= 1;
        },
        add() {
            this.num += 1;
        },
        change() {
            // 修改选中状态
            this.info.select = !this.info.select;
        }
    },
    watch: {
        isSelect(value) {
            // 根据选中状态修改数据
            if (value) {
                this.calc(0, this.total);
            } else {
                this.calc(this.total, 0);
            }
        },
        num(newValue, oldValue) {
            // 选中状态下同步
            if (this.isSelect)
                this.calc(
                    this.info.price * oldValue,
                    this.info.price * newValue
                );
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
    display none
    width 1rem
    height 1.6rem
    line-height 1.6rem
    text-align center
    background-color $primary-color
    color white
    margin-left 0.48rem
</style>