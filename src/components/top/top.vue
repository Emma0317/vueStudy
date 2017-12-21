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
#top{height:44px;background-color:#0af;color:#fff;}
#top>p{margin:0;text-align:center;line-height:44px;font-size:1.8rem;}
</style>
