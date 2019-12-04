<template>
  <div class="box">
     <div class="head">
       <input type="text" placeholder="搜索" v-model="search" @input="input">
     </div>
     <div class="center">
      <div v-for="(item,index) in newList" :key='index'>
        <p>{{item.title}}</p>
        <p>{{item.content}}</p>
      </div>
     </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      search:''
    }
  },
  computed:{
      newList(){
        return this.$store.getters.filterList
      }
  },
  methods:{
    input(e){
      this.$store.commit({type:"setState",key:"searchList",value:e.target.value})
    }
  },
  mounted(){
    this.$store.dispatch({type:"getList"})
  }
}
</script>

<style lang='scss' scoped>
  .box{
    width: 100%;
    height: 100%;
  }
  .head{
    width: 100%;
    height: 30px;
    input{
      width: 95%;
      height: 95%;
      background: #eee;
      border-radius: 10px;
      border: none;
      margin: 3px 10px;
      outline: none;
      padding: 10px;
    }
  }
  .center{
    width: 100%;
    height: 500px;
    overflow: auto;
   display: flex;
   flex-direction: column;
   div{
     flex: 1;
     border: 1px solid #eee;
     margin: 5px 0;
   }
  }
</style>