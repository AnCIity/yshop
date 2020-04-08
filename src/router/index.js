import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/pages/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/classify",
        name: "Classify",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "classify" */ "../views/pages/Classify.vue"
            ),
    },
    {
        path: "/shopping",
        name: "Shopping",
        component: () =>
            import(
                /* webpackChunkName: "shopping" */ "../views/pages/Shopping.vue"
            ),
    },
    {
        path: "/my",
        name: "My",
        component: () =>
            import(/* webpackChunkName: "shopping" */ "../views/pages/My.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
