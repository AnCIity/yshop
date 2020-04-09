import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/pages/Index.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
        children: [
            {
                path: "",
                redirect: "home",
            },
            {
                path: "/home",
                name: "Home",
                component: () =>
                    import(
                        /* webpackChunkName: "classify" */ "../views/pages/Home.vue"
                    ),
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
                    import(
                        /* webpackChunkName: "shopping" */ "../views/pages/My.vue"
                    ),
            },
        ],
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import(
                /* webpackChunkName: "shopping" */ "../views/minor/login.vue"
            ),
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import(
                /* webpackChunkName: "shopping" */ "../views/minor/register.vue"
            ),
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
