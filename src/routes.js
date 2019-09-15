import VueRouter from "vue-router";

const routes=[{
  name:"/",
  path:"/",
  component: () => import("@/components/home")
},
{
  name:"now",
  path:"/now",
  component: () => import("@/components/now")
},
{
  name:"soon",
  path:"/soon",
  component: () => import("@/components/soon")
},
{
  name:"movie",
  path:"/movie",
  component: () => import("@/components/movie")
},
{
  name:"auth",
  path:"/auth",
  component: () => import("@/components/auth")
},
{
  name:"profile",
  path:"/profile",
  component: () => import("@/components/profile")
},
{
  name:"user",
  path:"/user",
  component: () => import("@/components/user")
},
{
  name:"userCards",
  path:"/userCards",
  component: () => import("@/components/userCards")
},
{
  name:"reservations",
  path:"/reservations",
  component: () => import("@/components/reservations")
}
];

const router = new VueRouter({
  routes
})

export default router;
