/**
 * @author City
 * @description 登录界面
 */

<template>
    <div class="login">
        <y-header>
            <template v-slot:center>登录</template>
            <template v-slot:right>
                <router-link to="/register" tag="span">注册</router-link>
            </template>
        </y-header>

        <div class="inner">
            <div class="put">
                <input type="tel" value placeholder="请输入手机号" v-model="user.phone" />
            </div>
            <div class="put">
                <input type="password" value placeholder="请输入密码" v-model="user.password" />
            </div>
            <p>
                <span>忘记密码</span>
            </p>
            <div class="put">
                <input type="button" value="登录" @click="callLogin" />
            </div>
        </div>
    </div>
</template>

<script>
import yHeader from "@/components/common/y-header";
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Login",
    data() {
        return {
            user: {}
        };
    },
    components: {
        yHeader
    },
    computed: {
        ...mapGetters("user", ["isLogin"])
    },
    methods: {
        ...mapActions("user", ["login"]),
        async callLogin() {
            const msg = await this.login(this.user);
            if (this.isLogin) {
                this.$message({
                    message: msg,
                    type: "success"
                });
                this.$router.push("/my");
            } else {
                this.$message({
                    message: msg,
                    type: "err"
                });
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

    & div, & p
        margin 0.4rem 0

    p
        height 0.2rem

        span
            color #777
            float right

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
</style>