<template>
  <div>
    <top></top>
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
import Top from '@/components/top/top.vue'
import Foot from '@/components/foot/foot.vue'
export default {
  name: 'app',
  components:{Top,Foot}
}
</script>
<style>
</style>
