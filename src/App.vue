<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
// 如果后台获取不到你给他的token的话那你就需要设置一个response header 属性名为 Access-Control-Allow-Credentials: true
// import axios from "axios";
// import storage from './storage/index'
export default {
  name: "app",
  components: {
  }
};
</script>

<style lang="scss" scoped>
</style>
