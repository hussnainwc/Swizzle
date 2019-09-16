import VueRouter from "vue-router";

// Declares all routes asynchronously so that components are lazy loaded (only loaded when needed)
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
];

const router = new VueRouter({
  routes
})

export default router;
