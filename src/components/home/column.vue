/**
 * @author City
 * @description 首页栏目
 */

<template>
    <div class="column">
        <h2>
            <img :src="info.icon" alt />
            {{info.title}}
        </h2>
        <div class="content">
            <slot>
                <good-card v-for="item in info.goods" :info="item"></good-card>
            </slot>
        </div>
    </div>
</template>

<script>
import goodCard from "./column-card";

export default {
    name: "Column",
    props: ["info"],
    components: {
        goodCard
    }
};
</script>

<style lang="stylus" scoped>
.column
    padding-left 0.2rem

    .content
        white-space nowrap
        overflow auto
        height 4.8rem

        &::-webkit-scrollbar
            display none

    h2
        font-size 0.36rem
        padding 0.3rem 0

        img
            width 0.4rem
            margin-right 0.1rem
            vertical-align middle
</style>