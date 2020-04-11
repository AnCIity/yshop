/**
 * @author City
 * @description 购物车
 */

<template>
    <div class="shopping">
        <y-header>
            <template v-slot:center>购物车</template>
        </y-header>
        <empty v-if="data.length == 0"></empty>
        <exist v-else :info="data"></exist>
    </div>
</template>

<script>
import yHeader from "@/components/common/y-header";
import empty from "@/components/shopping/empty";
import exist from "@/components/shopping/exist";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "Shopping",
    components: {
        yHeader,
        empty,
        exist
    },
    computed: {
        ...mapGetters("shopping", ["data"])
    },
    methods: {
        ...mapActions("shopping", ["getData"])
    },
    mounted() {
        this.getData();
    }
};
</script>

<style lang="stylus" scoped></style>