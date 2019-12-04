<template>
  <div class="wrap">
    <header class="header"> 消息</header>
    <main class="main">
      <router-view></router-view>
    </main>
    <footer class="footer">
    
   
<router-link tag="span" active-class="col" v-for="item in navlist" :key='item.id' :to="item.path">{{item.title}}</router-link>
    </footer>
  </div>
</template>

<script>
export default {
   data(){
     return{
       navlist:[
         {
           title:"首页",
           id:1,
           path:"/ind/home"
         },{
           title:"消息",
           id:2,
           path:"/ind/messege"
         },{
           title:"我的",
           id:3,
           path:"/ind/my"
         }
       ]
     }
   },
   computed:{
     currentId(){
       return this.$store.state.currentId
     }
   },
   methods:{
   
   }
}
</script>

<style lang="scss" scoped>
.wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.header{
  width: 100%;
  height: 45px;
  background: rgb(0, 153, 255);
  text-align: center;
  line-height: 45px;
  color: #fff;

}
.main{
  width: 100%;
  flex: 1;
  overflow: auto;
}
.footer{
  width: 100%;
  height: 45px;
  border-top: 1px solid #eee;
  display: flex;
  span{
    flex: 1;
    text-align: center;
    line-height: 45px;
    &.col{
      color: red;
    }
  }
}
</style>