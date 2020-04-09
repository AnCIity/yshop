/**
 * @author City
 * @description 首页
 */

<template>
    <div class="home">
        <y-header :bgColor="'#fa3f70'">
            <template v-slot:center>
                <search></search>
            </template>
        </y-header>

        <div class="banner">
            <img src="@/assets/images/home/banner.png" width="100%" alt />
        </div>

        <div class="inner">
            <column :info="hot">
                <hot-card v-for="item in hot.goods" :info="item"></hot-card>
            </column>
            <column v-for="item in columns" :info="item"></column>
        </div>
    </div>
</template>

<script>
import Search from "@/components/common/search";
import Column from "@/components/home/column";
import hotCard from "@/components/home/hot-card";
import yHeader from "@/components/common/y-header";

export default {
    name: "Home",
    data() {
        return {
            hot: {
                title: "今日疯抢",
                icon: require("@/assets/images/home/hot.png"),
                goods: [
                    {
                        img: require("@/assets/images/home/goods.png"),
                        title: "测试商品名称测试测试测试ces测试撒大大大叔的",
                        price: 158.0,
                        cost: 199.0
                    },
                    {
                        img: require("@/assets/images/home/goods.png"),
                        title: "测试商品名称",
                        price: 158.0,
                        cost: 199.0
                    },
                    {
                        img: require("@/assets/images/home/goods.png"),
                        title: "测试商品名称",
                        price: 158.0,
                        cost: 199.0
                    }
                ]
            },
            columns: [
                {
                    title: "母婴专区",
                    icon: require("@/assets/images/home/baby.png"),
                    goods: [
                        {
                            img: require("@/assets/images/home/goods.png"),
                            title: "测试商品名称",
                            price: 158.0,
                            cost: 199.0
                        },
                        {
                            img: require("@/assets/images/home/goods.png"),
                            title: "测试商品名称",
                            price: 158.0,
                            cost: 199.0
                        },
                        {
                            img: require("@/assets/images/home/goods.png"),
                            title: "测试商品名称",
                            price: 158.0,
                            cost: 199.0
                        }
                    ]
                },
                {
                    title: "美妆护肤",
                    icon: require("@/assets/images/home/meizhuang.png"),
                    goods: [
                        {
                            img: require("@/assets/images/home/goods.png"),
                            title: "测试商品名称",
                            price: 158.0,
                            cost: 199.0
                        },
                        {
                            img: require("@/assets/images/home/goods.png"),
                            title: "测试商品名称",
                            price: 158.0,
                            cost: 199.0
                        },
                        {
                            img: require("@/assets/images/home/goods.png"),
                            title: "测试商品名称",
                            price: 158.0,
                            cost: 199.0
                        }
                    ]
                }
            ]
        };
    },
    components: {
        Search,
        Column,
        hotCard,
        yHeader
    }
};
</script>

<style lang="stylus" scoped>
.home
    width 100%
    overflow hidden
    padding-bottom 1.2rem

header
    height 0.9rem
    background-color #fa3f70
    display flex
    justify-content center
    align-items center
</style>
