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
}
];

const router = new VueRouter({
  routes
})

export default router;
