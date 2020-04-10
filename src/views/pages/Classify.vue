/**
 * @author City
 * @description 分类
 */

<template>
    <div class="classify">
        <y-header>
            <template v-slot:left>
                <span style="display: none"></span>
            </template>
            <template v-slot:center>
                <search></search>
            </template>
        </y-header>
        <div class="inner">
            <div class="left">
                <ul>
                    <li
                        v-for="(item,index) in data"
                        :key="index"
                        @click="cutSort(item)"
                        :class="{cut: select==item.name}"
                    >{{ item.name }}</li>
                </ul>
            </div>
            <div class="right">
                <classCard v-for="info in sort" :key="info.id" :info="info"></classCard>
            </div>
        </div>
    </div>
</template>

<script>
import Search from "@/components/common/search";
import yHeader from "@/components/common/y-header";
import classCard from "@/components/classify/class-card";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "Classify",
    components: {
        Search,
        yHeader,
        classCard
    },
    computed: {
        ...mapGetters("classify", ["data", "sort", "select"])
    },
    methods: {
        ...mapActions("classify", ["getData", "cutSort"])
    },
    mounted() {
        this.getData();
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