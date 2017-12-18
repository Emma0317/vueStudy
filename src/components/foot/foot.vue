<template>
  <div id="foot">
    <ul class="nav nav-pills">
      <li role="presentation" class='active' @click="menuChange('/')"><i class="glyphicon glyphicon-home"></i>首页</li>
      <li role="presentation" @click="menuChange('/views')"><i class="glyphicon glyphicon-fire"></i>发现</li>
      <li role="presentation" @click="menuChange('/carts')"><i class="glyphicon glyphicon-shopping-cart"></i>购物车</li>
      <li role="presentation" @click="menuChange('/personal')"><i class="glyphicon glyphicon-user"></i>我的小屋</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'foot',
  data(){
    return {
      msg: '共同低部'
    }
  },
  methods:{
    menuChange:function(pathSet){//页面跳转
      this.$router.push({path:pathSet});
    }
  }
}
</script>
<style>
#foot{position:fixed;bottom:0;right:0;left:0;padding:10px 0;background-color:#fff;border-top:1px solid #e0e0e0;}
#foot i.glyphicon{display:block;font-size:2.2rem;padding-bottom:2px;}
#foot .nav>li{width:25%;padding:0;margin:0;text-align:center;font-size:1.4rem;color:#999;}
#foot .nav>li.active{color:#FF5000;}
</style>
