import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentId:1,
    newList:[],
    searchList:''
  },
  mutations: {
    setState(state,payload){
      state[payload.key]=payload.value
    }
  },
  getters:{
     filterList(state){
       if(state.searchList===''){
         return state.newList
       }else{
         return state.newList.filter(item=>item.title.includes(state.searchList))
       }
     }
  },
  actions: {
      getList({commit}){
        axios.get('/getlist').then(res=>{
          if(res.data.code===200){
            commit({type:"setState",key:'newList',value:res.data.data})
          }
        })
      }



  },
  modules: {
  }
})
