import Vue from 'vue'
import Router from 'vue-router'
import seller from '../page/seller/seller.vue'
import goods from '../page/goods/goods.vue'
import ratings from '../page/ratings/ratings.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/page/goods/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/page/goods/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/page/ratings/ratings',
      name: 'ratings',
      component: ratings
    }
  ]
})
