<template>
  <div>
    <div class="header-main">
      <div class="header-container">
        <div class="header-left">
          <a href="javascript:;">小&nbsp;米</a>
          <a href="javascript:;">折扣</a>
          <a href="javascript:;">客服</a>
          <a href="javascript:;">新品</a>
        </div>
        <div class="header-right">
          <a href="javascript:;">注册</a>
          <a href="javascript:;">登录</a>
          <a class="shoping-car" href="javascript:;">购物车</a>
        </div>
      </div>
    </div>
    <div class="header-bottom-main">
      <div class="header-bottom-container">
        <div class="header-bottom-logo">
          <a href="javascript:;"></a>
        </div>
        <div class="header-bottom-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>红米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-bottom-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;">icon</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header"
};
</script>

<style lang="scss" scoped>
.header-main {
  background-color: $colorB;
  .header-container {
    width: $min-width;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
    a {
      margin-right: 15px;
      color: #b0b0b0;
      text-align: center;
      display: inline-block;
    }
    .shoping-car {
      width: 100px;
      background-color: $colorA;
      color: azure;
      margin-right: 0px;
    }
  }
}
.header-bottom-main {
  .header-bottom-container {
    width: $min-width;
    margin: 0 auto;
    height: 112px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-bottom-logo {
      display: inline-block;
      width: 55px;
      height: 55px;
      background-color: $colorA;
      border-radius: 2px;
      a {
        display: inline-block;
        width: 110px;
        height: 55px;
        &:before {
          content: " ";
          height: 55px;
          border-radius: 50%;
          width: 55px;
          display: inline-block;
          background: url("../assets/images/mi-home.png") no-repeat center;
          background-size: 55px;
          transition: margin 0.5s;
        }
        &:after {
          content: " ";
          height: 55px;
          width: 55px;
          display: inline-block;
          background: url("../assets/images/mi-logo.png") no-repeat center;
          background-size: 55px;
        }
        &:hover:before {
          margin-left: -55px;
          transition: margin 0.5s;
        }
      }
    }
    .header-bottom-menu {
      display: inline-block;
      padding-left: 200px;
      width: 640px;
      .item-menu {kk
        display: inline-block;
        color: $colorB;
        font-weight: bold;
        font-size: $fontI;
        line-height: 112px;
        margin-right: 20px;
        span {
          cursor: pointer;
        }
        &:hover {

        }
      }
    }
    .header-bottom-search {
      width: 320px;
      line-height: 112px;
      .wrapper {
        height: 50px;
        border: 1px solid #e0e0e0;
        display: flex;
        align-items: center;
        input {
          border: none;
          box-sizing: border-box;
          border-right: 1px solid #e0e0e0;
          width: 270px;
          height: 50px;
          padding-left: 15px;
        }
        a {
          display: inline-block;
          width: 30px;
          height: 30px;
          background: url('../assets/images/r13.png') no-repeat center;
          background-size: contain;
          padding-left: 20px;
        }
      }
    }
  }
}
</style>