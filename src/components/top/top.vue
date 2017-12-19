<template>
  <div id="top">
    <p class="title">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      msg: '首页'
    }
  }
}
</script>
<style>
#top{height:44px;background-color:#FF5000;color:#fff;}
#top>p{margin:0;text-align:center;line-height:44px;font-size:1.8rem;}
</style>
