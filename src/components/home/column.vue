/**
 * @author City
 * @description 首页栏目
 */

<template>
    <div class="column">
        <h2>
            <!-- <img :src="info.icon" alt /> -->
            <i :class="['iconfont', info.icon]" :style="info.color"></i>
            {{info.name}}
        </h2>
        <div class="content">
            <template v-if="info.name == '今日疯抢'">
                <hot-card v-for="item in info.list" :key="item.id" :info="item"></hot-card>
            </template>
            <template v-else>
                <good-card v-for="item in info.list" :key="item.id" :info="item"></good-card>
            </template>
        </div>
    </div>
</template>

<script>
import goodCard from "./good-card";
import hotCard from "./hot-card";

export default {
    name: "Column",
    props: ["info"],
    components: {
        goodCard,
        hotCard
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
        height 0.5rem
        line-height 0.5rem
        font-size 0.36rem
        padding 0.3rem 0
        display flex
        align-items center

        // img
        // width 0.4rem
        // margin-right 0.1rem
        // vertical-align middle
        i
            margin-right 0.25rem
            font-size 0.5rem
</style>