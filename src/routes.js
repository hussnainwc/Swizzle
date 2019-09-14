import VueRouter from "vue-router";

const routes=[{
  path:"/",
  component:require("./components/home").default
},
{
  name:"now",
  path:"/now",
  component:require("./components/now").default
},
{
  name:"soon",
  path:"/soon",
  component:require("./components/soon").default
},
{
  name:"movie",
  path:"/movie",
  component:require("./components/movie").default
}
];

const router = new VueRouter({
  routes
})

export default router;
