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
    <div class="header-bar-container">
      <span class="header-container-logo"></span>
      <div class="container-bar">
        <a href="javascript:;" v-for="item in headerBar" :key="item.id">{{item.name}}</a>
      </div>
      <div class="container-bar-search">
        <input type="text" />
        <span class="search-icon">
          <img src="../assets/images/search.png" alt="">
        </span>
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
      ],
      headerBar: [
        { name: "小米手机" },
        { name: "红米手机" },
        { name: "电视" },
        { name: "笔记本" },
        { name: "电视" }
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
  .header-bar-container {
    height: 40px;
    width: $min-width;
    margin: 0 auto;
    height: 100px;
    display: flex;
    justify-content: space-between;
    .header-container-logo {
      display: inline-block;
      height: 55px;
      width: 55px;
      align-self: center;
      overflow: hidden;
      background: url("../assets/images/logo.png");
      background-color: #ff6620;
      &:hover {
        transition: all 0.5s;
        background-position: 100% 0;
      }
    }
    .container-bar {
      height: 100%;
      line-height: 100px;
      a {
        padding-right: 50px;
        color: #333;
      }
    }
    .container-bar-search {
      height: 50px;
      &:focus input{
        border: 1px solid #ff6620;
      }
      &:focus span{
        border: 1px solid #ff6620;
      }
      input {
        width: 240px;
        height: 100%;
        outline: none;
        font-size: 16px;
        border: 1px solid #e0e0e0;
      }
      .search-icon {
        display: inline-block;
        height: 50px;
        width: 50px;
        .img {
          height: 20px;
          width: 20px;
          background-color: #ff6620;
        }
      }
    }
  }
}
</style>

 



