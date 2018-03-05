import Vue from 'vue'
import Router from 'vue-router'
import singer from 'components/singer/singer'
import search from 'components/search/search'
import recommend from 'components/recommend/recommend'
import rank from 'components/rank/rank'
import SingerDetail from 'components/singer-datail/singer-detail'
import disc from 'components/disc/disc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: recommend,
      children: [{
        path: ':id',
        component: disc
      }]
    },
    {
      path: '/singer',
      component: singer,
      children: [{
        path: ':id',
        component: SingerDetail
      }]
    },
    {
      path: '/rank',
      component: rank
    },
    {
      path: '/search',
      component: search
    }
  ]
})
