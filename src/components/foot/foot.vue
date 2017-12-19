<template>
  <div id="foot">
    <ul class="nav nav-pills">
      <li role="presentation"><router-link :to="{ path: '/home'}"><i class="glyphicon glyphicon-home"></i>首页</router-link></li>
      <li role="presentation"><router-link :to="{ path: '/views'}"><i class="glyphicon glyphicon-fire"></i>发现</router-link></li>
      <li role="presentation"><router-link :to="{ path: '/carts'}"><i class="glyphicon glyphicon-shopping-cart"></i>购物车</router-link></li>
      <li role="presentation"><router-link :to="{ path: '/personal'}"><i class="glyphicon glyphicon-user"></i>我的小屋</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'foot'
}
</script>
<style>
#foot{position:fixed;bottom:0;right:0;left:0;padding:8px 0;background-color:#fff;border-top:1px solid #e9e9e9;}
#foot i.glyphicon{display:block;font-size:2rem;padding-bottom:2px;}
#foot .nav>li{width:25%;padding:0;margin:0;text-align:center;font-size:1.3rem;color:#999;}
#foot .nav>li>.router-link-exact-active{color:#FF5000;}
#foot .nav>li>a:focus, .nav>li>a:hover{background:#fff;}
#foot .nav>li>a{padding:0;color:#666;}
</style>
