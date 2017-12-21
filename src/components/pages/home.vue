<template>
  <div id="home">
    <div class="search">
      <input class="form-control input-lg" type="text" placeholder="Search for goods">
      <section class="">
        <ul>
          <li>花甲米线</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carts',
  data () {
    return {
      msg: '首页'
    }
  }
}
</script>
<style>
#home div.search{padding:0 20px 10px 20px;background-color:#0af;}
</style>
