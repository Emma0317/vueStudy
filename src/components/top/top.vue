import foot from '@/components/foot/foot'
import top from '@/components/top/top'

<template>
  <div id="top">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      msg: '共同头部'
    }
  }
}
</script>
