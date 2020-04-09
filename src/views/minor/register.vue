/**
 * @author City
 * @description 注册界面
 */

<template>
    <div class="login">
        <y-header>
            <template v-slot:center>注册</template>
            <template v-slot:right>登录</template>
        </y-header>

        <div class="inner">
            <div class="put">
                <input type="tel" value placeholder="请输入手机号" />
            </div>
            <div class="put">
                <input type="password" value placeholder="请输入密码" />
            </div>
            <div class="put">
                <input type="text" value placeholder="请输入验证码" />
                <span>点击获取</span>
            </div>
            <div class="put">
                <input type="button" value="下一步" />
            </div>
            <div class="tiaokuan">
                <i class="iconfont icon-select"></i>
                <span>我已阅读并同意使用条款和隐私服务</span>
            </div>
        </div>
    </div>
</template>

<script>
import yHeader from "@/components/common/y-header";

export default {
    name: "Register",
    components: {
        yHeader
    }
};
</script>

<style lang='stylus' scoped>
.inner
    width 6.3rem
    margin 0.6rem
    margin-top 3.2rem

    .put
        margin 0.4rem 0
        position relative

        span
            color #fe4266
            font-size 0.24rem
            position absolute
            width 1rem
            right 0
            top 0.32rem

    input
        width 100%
        height 0.8rem
        line-height 0.8rem
        font-size 0.3rem
        outline none
        border none

        &:not([type=button])
            border-bottom 1px solid #999

        &[type=button]
            height 1rem
            line-height 1rem
            color white
            background-color $primary-color

    .tiaokuan
        font-size 0.26rem

        i
            font-size 0.3rem
            margin-right 0.2rem
</style>