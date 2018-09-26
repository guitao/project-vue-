<template>
  <div id="app">
    <app-header :poiInfo='poi_info'></app-header>
    <app-nav :commentNum='commentNum'></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import Nav from '@/components/nav/Nav'
import Goods from '@/components/goods/Goods'
import Ratings from '@/components/ratings/Ratings'
import Seller from '@/components/seller/Seller'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-nav': Nav
  },
  data() {
    return {
      poi_info: {},
      commentNum: 0
    }
  },
  created() {
    fetch('/api/goods')
      .then(res => res.json())
      .then(response => {
        // console.log(response);
        this.poi_info = response.data.poi_info;

      })

      fetch('/api/ratings')
        .then(res => res.json())
        .then(response => {
          this.commentNum = response.data.comment_num
        })
  }
}
</script>

<style>

</style>
