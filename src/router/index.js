import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

function route (path, file, name, children) {
  return {
    exact: true,
    path,
    name,
    children,
    component: () => import('../pages' + file)
  }
}

export default new Router({
  routes: [
    route("/login",'/Login',"Login"),// /login路径，路由到登录组件
    {
      path:"/", // 根路径，路由到 Layout组件
      component: () => import('../pages/Layout'),
      // redirect:"/index/dashboard",
      redirect:"/login",
      children:[ // 其它所有组件都是 Layout的子组件
        route("/index/dashboard","/Dashboard","Dashboard"),
        route("/item/category",'/item/Category',"Category"),
        route("/item/brand",'/item/Brand',"Brand"),
        route("/item/list",'/item/Goods',"Goods"),
        route("/item/specification",'/item/specification/Specification',"Specification"),
        route("/user/statistics",'/user/UserStatistics',"UserStatistics"),
        route("/user/list",'/user/Users',"Users"),
        route("/trade/promotion",'/trade/Promotion',"Promotion"),
        route("/trade/logistics",'/trade/Logistics',"Logistics"),
        route("/trade/statistics",'/trade/Statistics',"TradeStatistics"),
        route("/trade/order",'/trade/Order',"Order"),
        route("/authority/privilege",'/authority/Privilege',"Privilege"),
        route("/authority/role",'/authority/Role',"Role"),
        route("/authority/member",'/authority/Member',"Member"),
        route("/order/normal","/order/Normal","NormalOrder"),
        route("/order/inormal","/order/Inormal","InormalOrder"),
      ]
    }
  ]
})
