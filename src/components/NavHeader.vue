<template>
  <div class="header-main">
    <div class="header-container">
      <div class="header-left">
        <a :href="item.url" v-for="item in headerMain" :key="item.id">{{item.name}}</a>
      </div>
      <div class="right">
        <a href="javascript:;">登录</a>
        <a href="javascript:;">注册</a>
        <a href="javascript:;">消息通知</a>
        <a href="javascript:;">购物车</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data() {
    return {
      headerMain: [
        {
          name: "MIUI",
          url: "https://www.mi.com/index.html"
        },
        {
          name: "IoT",
          url: "https://home.miui.com/"
        },
        {
          name: "云服务",
          url: "https://www.xiaomiyoupin.com/"
        },
        {
          name: "金融",
          url: "https://www.xiaomiyoupin.com/"
        },
        {
          name: "小爱开放平台",
          url: "https://xiaoai.mi.com/"
        },
        {
          name: "企业团购",
          url: "https://www.xiaomiyoupin.com/"
        },
        {
          name: "下载app",
          url: "https://www.mi.com/appdownload"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.header-main {
  width: 100%;
  height: 40px;
  background-color: #333;
  .header-container {
    height: 40px;
    width: $min-width;
    margin: 0 auto;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    a {
      display: inline-block;
      color: #b0b0b0;
      padding-right: 10px;
      font-size: 12px;
      &:hover {
        color: antiquewhite;
      }
    }
  }
}
</style>