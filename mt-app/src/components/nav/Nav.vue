<template>
  <div class="nav">
    <router-link class="nav-item" to="/goods">
        订餐
        <i class="underline"></i>
    </router-link>
    <router-link class="nav-item" to="/ratings">
        评价({{commentNum}})
        <i class="underline"></i>
    </router-link>
    <router-link class="nav-item" to="seller">
        商家
        <i class="underline"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    commentNum: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e4e4e4;
}
.nav .nav-item {
  flex: 1;
  text-align: center;
  text-decoration: none;
  color: #666;
  position: relative;
}
.nav .active {
  color: #ffbb22;
}
.nav .active .underline {
  width: 20px;
  height: 2px;
  background: #ffbb22;
  display: inline-block;
  position: absolute;
  left: 50%;
  margin-left: -10px;
  bottom: 0;
}
</style>
