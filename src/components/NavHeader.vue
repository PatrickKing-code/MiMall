<template>
  <div class="main">
    <div class="header-main">
      <div class="header-container">
        <div class="header-left">
          <a :href="item.url" v-for="item in headerMain" :key="item.id">{{
            item.name
          }}</a>
        </div>
        <div class="right">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;">消息通知</a>
          <a href="javascript:;">购物车</a>
        </div>
      </div>
    </div>
    <div class="header-logo-search">
      <div class="header-logo-search-main">
        <div class="header-logo">
          <span class="header-container-logo"></span>
        </div>
        <div class="header-bar">
          <div class="container-bar">
            <a href="javascript:;" v-for="item in headerBar" :key="item.id">{{
              item.name
            }}</a>
          </div>
        </div>
        <div class="header-search">
          <input type="text" />
          <span class="search-icon">
            <img src="../assets/images/search.png" alt="" />
          </span>
        </div>
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
          url: "https://www.mi.com/index.html",
        },
        {
          name: "IoT",
          url: "https://home.miui.com/",
        },
        {
          name: "云服务",
          url: "https://www.xiaomiyoupin.com/",
        },
        {
          name: "金融",
          url: "https://www.xiaomiyoupin.com/",
        },
        {
          name: "小爱开放平台",
          url: "https://xiaoai.mi.com/",
        },
        {
          name: "企业团购",
          url: "https://www.xiaomiyoupin.com/",
        },
        {
          name: "下载app",
          url: "https://www.mi.com/appdownload",
        },
      ],
      headerBar: [
        { name: "小米手机" },
        { name: "红米手机" },
        { name: "电视" },
        { name: "笔记本" },
        { name: "电视" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
/* header top  */
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
/* header bar */
.header-logo-search {
  width: 100%;
  height: 100px;
  .header-logo-search-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: $min-width;
    height: 100px;
    margin: 0 auto;
    .header-logo {
      height: 50px;
      width: 50px;
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
    }
    .header-bar {
      width: 500px;
      .container-bar {
        height: 100%;
        line-height: 100px;
        a {
          text-decoration: none;
          padding-right: 50px;
          color: #333;
        }
      }
    }
    .header-search {
      height: 50px;
      width: 300px;
      box-sizing: content-box;
      input {
        display: inline-bloak;
        height: 100%;
        width: 245px;
        border: 1px solid #ff6620;
        float: left;
        outline: none;
      }
      .search-icon {
        height: 52px;
        width: 50px;
        float: left;
        border: 1px solid #ff6620;
        border-left: none;
        img {
          padding: 9px;
          display: inline-block;
          height: 32px;
          width: 30px;
        }
      }
    }
  }
}
</style>
