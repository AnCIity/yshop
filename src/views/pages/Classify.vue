/**
 * @author City
 * @description 分类
 */

<template>
    <div class="classify">
        <y-header>
            <template v-slot:center>
                <search></search>
            </template>
        </y-header>
        <div class="inner">
            <div class="left">
                <ul>
                    <li
                        v-for="item in items"
                        :key="item.id"
                        @click="showClass(item)"
                        :class="{cut: select==item.id}"
                    >{{ item.title }}</li>
                </ul>
            </div>
            <div class="right">
                <classCard v-for="(sort, index) in sorts" :key="index" :info="sort"></classCard>
            </div>
        </div>
    </div>
</template>

<script>
import Search from "@/components/common/search";
import yHeader from "@/components/common/y-header";
import classCard from "@/components/classify/class-card";

export default {
    name: "Classify",
    data() {
        return {
            select: 0,
            sorts: [],
            items: []
        };
    },
    components: {
        Search,
        yHeader,
        classCard
    },
    methods: {
        showClass(item) {
            this.select = item.id;
            this.sorts = item.sorts;
        }
    },
    mounted() {
        // 数据接口处理
        this.items = [
            {
                id: 0,
                title: "母婴专区",
                sorts: [
                    {
                        title: "奶粉0",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉0",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    }
                ]
            },
            {
                id: 1,
                title: "美妆护肤",
                sorts: [
                    {
                        title: "奶粉1",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    }
                ]
            },
            {
                id: 2,
                title: "家居生活",
                sorts: [
                    {
                        title: "奶粉2",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    }
                ]
            },
            {
                id: 3,
                title: "食品营养",
                sorts: [
                    {
                        title: "奶粉3",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    }
                ]
            },
            {
                id: 4,
                title: "全球直邮",
                sorts: [
                    {
                        title: "奶粉4",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    },
                    {
                        title: "奶粉",
                        img: require("@/assets/images/classifg/class.png")
                    }
                ]
            }
        ];
        this.showClass(this.items[0]);
    }
};
</script>

<style lang="stylus" scoped>
.classify
    padding-bottom 1rem

    .inner
        min-height calc(100vh - 1.9rem)
        display flex

        .left
            width 2.3rem
            background-color #fafafa
            min-height 1rem

            li
                height 0.94rem
                line-height 0.94rem
                text-align center
                font-size 0.28rem
                border-left 0.08rem solid white

                &.cut
                    color $primary-color
                    border-left-color $minor-color

        .right
            width 5.2rem
            min-height 1rem
            padding 0.1rem
</style>