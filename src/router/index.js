import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'


import HomeView from '../views/HomeView.vue'
import TaskView from '../views/TaskView.vue'
import Completati from '../views/TaskCompletati.vue';
import Api from '../views/ApiView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta:{
      isGuest: true
    },
    component: HomeView
  },
  {
    path: '/tasks',
    name: 'tasks',
    meta: {
      auth: true
    },
    component: TaskView
  },
  {
    path: '/completati',
    name: 'completati',
    meta: {
      auth: true
    },
    component: Completati
  },
  {
    path: '/albo',
    name: 'albo',
    meta: {
      auth: true
    },
    component: Api
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) =>{
  if (to.meta.auth && !store.getters.getLogUser.id){
      next({name: 'home'});
  } else if(store.getters.getLogUser.id && to.meta.isGuest){
      next({name: 'tasks'});
  } else next();
});

export default router
