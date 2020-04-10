/**
 * @author City
 * @description 注册界面
 */

<template>
    <div class="login">
        <y-header>
            <template v-slot:center>注册</template>
            <template v-slot:right>
                <router-link to="/login" tag="span">注册</router-link>
            </template>
        </y-header>

        <div class="inner">
            <div class="put">
                <input type="tel" value placeholder="请输入手机号" v-model="user.phone" />
            </div>
            <div class="put">
                <input type="password" value placeholder="请输入密码" v-model="user.password" />
            </div>
            <div class="put">
                <input type="text" value placeholder="请输入验证码" />
                <span>点击获取</span>
            </div>
            <div class="put">
                <input type="button" value="下一步" @click="callRegister" />
            </div>
            <div class="tiaokuan">
                <i
                    :class="['iconfont', isDeal?'icon-select-fill':'icon-select']"
                    @click="isDeal=!isDeal"
                ></i>
                <span>我已阅读并同意使用条款和隐私服务</span>
            </div>
        </div>
    </div>
</template>

<script>
import yHeader from "@/components/common/y-header";
import { requestRegister } from "@/api";

export default {
    name: "Register",
    data() {
        return {
            info: "已注册",
            isDeal: false,
            user: {}
        };
    },
    components: {
        yHeader
    },
    methods: {
        async callRegister() {
            if (!this.isDeal) return;

            const { data: result } = await requestRegister(this.user);
            if (result.status === 1) {
                this.$router.push("/login");
            } else {
                this.user = {};
            }
        }
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