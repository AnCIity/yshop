<template>
    <div id="app">
        <!-- 路由 -->
        <router-view />
    </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
html::-webkit-scrollbar
    display none

body
    font-size 0.12rem !important

#app
    font-family Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    // text-align: center;
    color #2c3e50
    // 初始属性
    width $main-wdith
    margin 0 auto
    min-height 100vh
    background white
    overflow hidden
    position relative

a
    color #393939
    text-decoration none
</style>
