<template>
  <div class="container">
    <div class="product-box">
      <div class="product-header">
        <h1>手机</h1>
        <a href="javascript:;">查看全部</a>
      </div>
      <div class="product-container">
        <div class="product-left"></div>
        <div class="product-right">
          <div class="item">
            <span>新品</span>
            <div class="item-img">
              <img src="" alt="">
            </div>
            <div class="item-info">
              <h2> 小米10 青春版 5G</h2>
              <p>50倍潜望式变焦 / 轻薄5G手机</p>
              <span>2099</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      phoneList: [
        {
          
        }
      ]
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
  width: $min-width;
  margin: 80px auto;
  .product-header {
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 20px;
    }
    a {
      color: red;
    }
  }
}
</style>
