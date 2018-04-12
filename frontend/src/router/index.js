import Vue from 'vue'
import Router from 'vue-router'
import CommentList from '@/components/CommentList'
import CommentItem from '@/components/CommentItem'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/comments',
      name: 'CommentList',
      component: CommentList
    },
    {
      path: '/comment/:commentId',
      name: 'CommentItem',
      component: CommentItem
    }
  ]
})
