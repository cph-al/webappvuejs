import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import SelectedUser from '@/components/SelectedUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/selectedUser/:user_id',
      name: 'SelectedUser',
      component: SelectedUser,
      props: true
    }
  ]
})
