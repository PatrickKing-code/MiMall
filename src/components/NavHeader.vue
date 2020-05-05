<template>
  <div>
      <div class="nav-container">
        <div>left</div>
        <div>right</div>
      </div>
  </div>
</template>

<script>
export default {
    name: "nav-header"
}
</script>

<style lang="scss" scoped>
  .nav-container {
    width: 1226px;
    background-color: gray;
    color: honeydew;
    display: flexk;
    margin: 0 auto;
    height: 40px;
    justify-content: space-between;
  }

</style>