/**
 * @author City
 * @description 详情
 */

<template>
    <div class="details">
        <!-- 顶部选项 -->
        <div class="top">
            <i class="iconfont icon-left" @click="goBack"></i>
            <i class="iconfont icon-shopping" @click="goShop"></i>
            <i class="iconfont icon-more"></i>
        </div>

        <template v-if="data">
            <!-- 图片展示 -->
            <div class="show">
                <div class="show-content">
                    <img
                        v-for="(img, index) in data.swiperImgArr"
                        key="index"
                        :src="img"
                        v-show="swiperIndex === index"
                    />
                </div>
                <div class="show-control">
                    <i
                        v-for="(img, index) in data.swiperImgArr"
                        key="index"
                        @click="swiperIndex = index"
                        :class="{'cut': swiperIndex === index}"
                    ></i>
                </div>
            </div>

            <!-- 商品信息 -->
            <div class="info">
                <div class="info-top">
                    <div class="title">
                        <h2>{{data.name}}</h2>
                    </div>
                    <div class="favor">
                        <i class="iconfont icon-favor"></i>
                        <span>收藏</span>
                    </div>
                </div>
                <div class="info-bottom">
                    <div class="price">
                        <strong>￥{{data.reduct_price | fixed}}</strong>
                        <strong>￥{{data.original_price | fixed}}</strong>
                    </div>
                    <div class="tag">
                        <div class="tag-top">
                            <em>{{(data.allowance * 10).toFixed(1)}}折</em>
                            <em>{{data.isFreeShip ? "包邮" : "不包邮"}}</em>
                        </div>
                        <div class="tag-bottom">
                            <em v-for="describe in data.describe" key="describe">{{describe}}</em>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 详情以及口碑 -->
            <div class="sort">
                <ul class="sort-title">
                    <li :class="{'cut': sortIndex === 0 }" @click="cutSort(0)">商品详情</li>
                    <li :class="{'cut': sortIndex === 1 }" @click="cutSort(1)">买家口碑</li>
                </ul>
                <ul class="sort-content">
                    <li v-show="sortIndex === 0" class="goods-img">
                        <img v-for="(item,index) in data.shopDes" key="index" :src="item" alt />
                    </li>
                    <li v-show="sortIndex === 1" class="user-comment">
                        <div class="comment-options">
                            <i
                                :class="{'cut': commentIndex === 'all' }"
                                @click="cutComment('all')"
                            >全部评价</i>
                            <i
                                :class="{'cut': commentIndex === 'good' }"
                                @click="cutComment('good')"
                            >好评</i>
                            <i
                                :class="{'cut': commentIndex === 'bad' }"
                                @click="cutComment('bad')"
                            >差评</i>
                            <i
                                :class="{'cut': commentIndex === 'postForm' }"
                                @click="cutComment('postForm')"
                            >晒单</i>
                        </div>
                        <div class="comments">
                            <div v-for="(item,index) in comments" key="index" class="comment">
                                <div class="comment-title">
                                    <p>{{item.buyerName}}</p>
                                    <span>{{item.createTime}}</span>
                                </div>
                                <div class="comment-centent">
                                    <p>{{item.postDescribe}}</p>
                                    <div>
                                        <img
                                            v-for="(img, index) in item.postImg"
                                            :key="index"
                                            :src="img"
                                        />
                                    </div>
                                </div>
                                <div class="comment-admin">{{item.adminReviews}}</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- 底部 -->
            <div class="bottom">
                <p>
                    总价：
                    <span>￥0.00</span>
                </p>
                <div class="buttom-btn" @click="add">加入购物车</div>
                <div class="buttom-btn" @click="showPopup = true">立即购买</div>
            </div>

            <!-- 弹出层 -->
            <div class="popup" v-show="showPopup">
                <div class="buy">
                    <div class="buy-info">
                        <div class="buy-info-top">
                            <img :src="data.swiperImgArr && data.swiperImgArr[0]" />
                            <div>
                                <em>￥{{data.reduct_price | fixed}}</em>
                                <p>
                                    库存
                                    <span>{{data.total}}</span>
                                    件
                                </p>
                                <p>请选择商品属性</p>
                            </div>
                            <i class="close" @click="showPopup = false">×</i>
                        </div>
                        <div class="buy-info-bottom">
                            <p>购买数量</p>
                            <el-input-number
                                class="buy-info-num"
                                v-model="num"
                                :min="1"
                                :max="999"
                                size="small"
                            ></el-input-number>
                        </div>
                    </div>
                    <div class="buy-parmas">
                        <div class="parmas-chunk" v-for="(item, one) in data.buySelect" key="one">
                            <div class="chunk-title">{{item.name}}</div>
                            <div class="chunk-content">
                                <i
                                    v-for="(i, two) in item.list"
                                    key="two"
                                    @click="setSelect({one, two})"
                                    :class="[item.index == two ? 'cut' : '']"
                                >{{i}}</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "Details",
    props: ["id"],
    data() {
        return {
            swiperIndex: 0,
            sortIndex: 0,
            commentIndex: "all",
            showPopup: false,
            comments: [],
            num: 1
        };
    },
    computed: {
        ...mapGetters("details", ["data"]),
        ...mapGetters("shopping", { shops: "data" })
    },
    methods: {
        ...mapActions("details", ["getData", "select"]),
        ...mapActions("shopping", ["addShopping"]),
        goShop() {
            // 跳转购物车
            this.$router.push("/shopping");
        },
        goBack() {
            // 返回上一页
            this.$router.go(-1);
        },
        cutSort(index) {
            // 切换分类
            this.sortIndex = index;

            // 初始评论分类
            if (index === 1) {
                this.cutComment("all");
            }
        },
        cutComment(index) {
            // 切换评论
            this.commentIndex = index;
            this.comments = this.data.buyerReviews[index];
        },
        setSelect(value) {
            // 切换商品属性选项
            this.select(value);
            this.$forceUpdate();
        },
        add() {
            // 加入购物车

            if (this.showPopup) {
                // 数据整理
                let info = {
                    id: this.data.pid,
                    sid: 666,
                    name: this.data.name,
                    img: this.data.swiperImgArr[0],
                    num: 1,
                    price: this.data.reduct_price,
                    size: "一件装",
                    edit: false,
                    select: false
                };

                this.addShopping(info);
                this.$message({
                    message: "加入成功",
                    type: "success"
                });
                this.goShop();
            } else {
                this.showPopup = true;
            }
        }
    },
    mounted() {
        // 请求详情数据
        this.getData(this.id);
    }
};
</script>

<style lang='stylus' scoped>
.details
    position relative
    background #eeeeee
    min-height 100vh

    .top
        position absolute
        top 0
        z-index 999
        width 100%
        height 0.77rem

        i
            position absolute
            top 0.1rem
            background-color #b2b2b2
            display block
            width 0.57rem
            height 0.57rem
            line-height 0.57rem
            text-align center
            font-size 0.34rem
            border-radius 50%
            color white

            &.icon-left
                left 0.25rem

            &.icon-shopping
                right 1.3rem

            &.icon-more
                right 0.25rem

    .show
        background white
        position relative
        height 5.4rem
        overflow hidden
        border-bottom 1px solid #eeeeee

        .show-content
            height 100%
            display flex
            align-items center
            justify-content center

        .show-control
            position absolute
            bottom 0
            width 100%
            height 1rem
            display flex
            justify-content center
            align-items center

            i
                display block
                width 0.2rem
                height 0.2rem
                border-radius 50%
                background white
                margin 0 0.15rem
                border 0.01rem solid $primary-color

                &.cut
                    background-color $primary-color

    .info
        background white
        height 1.9rem
        padding 0 0.3rem 0.2rem
        overflow hidden

        .info-top
            height 0.8rem
            margin 0.1rem 0
            display flex

            .title
                width 5.5rem
                padding-right 0.4rem
                font-size 0.32rem
                line-height 0.4rem
                border-right 1px solid #ddd
                overflow hidden

            .favor
                width 1rem
                text-align center
                color #ec3a3a

                i
                    display block
                    font-size 0.5rem
                    margin-bottom 0.1rem

        .info-bottom
            height 0.9rem
            overflow hidden
            display flex

            .price
                width 1.8rem

                strong
                    font-size 0.38rem
                    color #ec3a3a
                    display block
                    line-height 0.45rem

                    &:last-child
                        font-size 0.24rem
                        color #999
                        text-decoration line-through

            .tag
                line-height 0.45rem

                .tag-top
                    em
                        color white
                        background-color $primary-color

                .tag-bottom
                    em
                        color $primary-color

                em
                    font-size 0.12rem
                    height 0.28rem
                    line-height 0.3rem
                    margin-right 0.2rem
                    padding 0.01rem 0.06rem
                    border 2px solid $primary-color

    .sort
        background white
        margin-top 0.3rem
        padding 0 0.45rem

        .sort-title
            height 0.8rem
            display flex
            justify-content space-between
            align-items center
            margin-bottom 0.2rem
            padding 0 0.65rem

            li
                width 1.5rem
                height 0.4rem
                text-align center
                font-size 0.28rem
                letter-spacing 0.02rem
                border-bottom 0.02rem solid white

                &.cut
                    color $primary-color
                    border-bottom-color $primary-color

        .sort-content
            margin-bottom 0.5rem

            .goods-img
                img
                    display block
                    width 100%

            .user-comment
                .comment-options
                    padding-bottom 0.3rem
                    display flex
                    justify-content space-between

                    i
                        background-color #999999
                        width 1.4rem
                        height 0.5rem
                        line-height 0.5rem
                        border-radius 0.25rem
                        text-align center
                        color white
                        font-size 0.26rem
                        letter-spacing 0.02rem

                        &.cut
                            background-color $primary-color

                .comments
                    margin-top 0.3rem

                    .comment
                        padding 0.5rem 0
                        border-bottom 0.01rem solid #eee

                        &:last-child
                            border-bottom none

                    .comment-title
                        position relative
                        height 0.5rem
                        line-height 0.5rem
                        margin-bottom 0.2rem

                        p
                            color $primary-color
                            font-size 0.34rem

                        span
                            position absolute
                            right 0
                            top 0.05rem
                            color #aaa

                    .comment-centent
                        padding 0.2rem

                        p
                            font-size 0.24rem
                            color #666666

                        div
                            display flex
                            margin 0.2rem 0
                            white-space nowrap
                            overflow auto

                            &::-webkit-scrollbar
                                display none

                            img
                                width 2rem
                                border 0.01rem solid #eee
                                margin-right 0.2rem

                    .comment-admin
                        border 0.01rem solid $minor-color
                        color $minor-color
                        padding 0.2rem
                        border-radius 0.25rem
                        letter-spacing 0.02rem

    .bottom
        background white
        position fixed
        bottom 0
        z-index 1001
        height 0.99rem
        line-height 0.99rem
        width 7.5rem
        border-top 1px solid #dddddd
        display flex

        p
            width 3.2rem
            font-size 0.3rem
            padding-left 0.3rem

            span
                color #eb2525

        .buttom-btn
            width 2rem
            font-size 0.3rem
            text-align center
            color rgba(255, 255, 255, 0.85)
            background $primary-color

            &:last-child
                background #eb2222

    .popup
        position fixed
        top 0
        left calc(((100% - 7.5rem) / 2))
        z-index 1000
        width 7.5rem
        height 100vh
        background rgba(0, 0, 0, 0.4)

        .buy
            position absolute
            bottom 1rem
            background white
            width 6.9rem
            padding 0 0.3rem 0.2rem

            .buy-info
                .buy-info-top
                    position relative
                    width 100%
                    height 2rem

                    img
                        position absolute
                        top -0.3rem
                        width 2rem
                        border 0.02rem solid #dddddd
                        border-radius 0.25rem

                    div
                        position absolute
                        left 2.5rem
                        top 0.4rem
                        line-height 0.4rem
                        font-size 0.24rem

                        em
                            color #eb2222
                            font-size 0.4rem

                    i.close
                        position absolute
                        top 0.2rem
                        right 0
                        width 0.5rem
                        height 0.5rem
                        line-height 0.5rem
                        border-radius 50%
                        border 0.03rem solid #999
                        color #999
                        text-align center
                        font-size 0.5rem

                .buy-info-bottom
                    height 0.6rem
                    line-height 0.6rem
                    margin 0.1rem 0 0.3rem

                    p
                        float left
                        font-size 0.36rem

                    .buy-info-num
                        float right

            .buy-parmas
                .parmas-chunk
                    .chunk-title
                        font-size 0.36rem
                        margin-bottom 0.2rem

                    .chunk-content
                        padding 0.1rem 0 0.5rem

                        i
                            background #dddddd
                            color #999999
                            border-radius 0.18rem
                            font-size 0.28rem
                            padding 0.1rem 0.4rem
                            margin-right 0.2rem

                            &.cut
                                background $primary-color
                                color white
</style>