import Vue from 'vue'
import VueRouter from 'vue-router'
import Ind from '../views/ind'
import Home from '../views/home'
import My from '../views/my'
import Messege from '../views/messege'
Vue.use(VueRouter)

const routes = [
   {
     path:"/",
     redirect:"/ind"
   },{
     path:"/ind",
     component:Ind,
     redirect:'/ind/home',
     children:[
       {
         path:"/ind/home",
         component:Home
       },{
         path:"/ind/messege",
         component:Messege
       },{
         path:"/ind/my",
         component:My
       }
     ]
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
