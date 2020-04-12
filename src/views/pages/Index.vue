/**
 * @author City
 * @description 主页面
 */

<template>
    <div>
        <!-- 路由 -->
        <router-view />
        <!-- 导航 -->
        <navigation></navigation>
    </div>
</template>

<script>
import Navigation from "@/components/common/navigation";

export default {
    components: {
        Navigation
    }
};
</script>