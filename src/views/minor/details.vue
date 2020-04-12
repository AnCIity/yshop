/**
 * @author City
 * @description 详情
 */

<template>
    <div class="details">
        <div class="top">
            <i class="iconfont icon-left"></i>
            <i class="iconfont icon-shopping"></i>
            <i class="iconfont icon-more"></i>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "Details",
    props: ["id"],
    computed: {
        ...mapGetters("details", ["data"])
    },
    methods: {
        ...mapActions("details", ["getData"])
    },
    mounted() {
        this.getData(this.id);
    }
};
</script>

<style lang='stylus' scoped>
.details
    position relative

    .top
        position absolute
        top 0
        pointer-events none
</style>