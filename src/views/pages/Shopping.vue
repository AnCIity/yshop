/**
 * @author City
 * @description 购物车
 */

<template>
    <div class="shopping">
        <y-header></y-header>
        <component :is="isEmpty?'empty':'exist'"></component>
    </div>
</template>

<script>
import yHeader from "@/components/common/y-header";
import empty from "@/components/shopping/empty";
import exist from "@/components/shopping/exist";

export default {
    name: "Shopping",
    components: {
        yHeader,
        empty,
        exist
    },
    data() {
        return {
            isEmpty: false
        };
    },
    methods: {}
};
</script>

<style lang="stylus" scoped></style>