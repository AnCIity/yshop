/** 
 * @author City 
 * @description 首页 
 */

<template>
    <div class="home">
        <y-header :bgColor="'#fa3f70'">
            <template v-slot:left>
                <span style="display: none"></span>
            </template>
            <template v-slot:center>
                <search></search>
            </template>
        </y-header>

        <div class="banner">
            <img src="@/assets/images/home/banner.png" width="100%" alt />
        </div>

        <div class="inner">
            <column v-for="item in data" :key="item.name" :info="item"></column>
        </div>
    </div>
</template>

<script>
import Search from "@/components/common/search";
import Column from "@/components/home/column";
import yHeader from "@/components/common/y-header";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "Home",
    data() {
        return {
            columns: []
        };
    },
    components: {
        Search,
        Column,
        yHeader
    },
    computed: {
        ...mapGetters("home", ["data"])
    },
    methods: {
        ...mapActions("home", ["getData"])
    },
    mounted() {
        this.getData();
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
