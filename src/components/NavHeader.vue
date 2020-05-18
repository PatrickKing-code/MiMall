<template>
  <div class="header-main">
      <div class="header-container">
        <div class="header-left">
          <a :href="item.url" v-for="item in headerMain" :key="item.id">{{item.name}}</a>
        </div>
        <div class="right"></div>
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
            name: 'MIUI', 
            url: 'https://www.mi.com/index.html'
          },
          {
            name: 'IoT', 
            url: 'https://home.miui.com/'
          },
          {
            name: '云服务', 
            url: 'https://www.xiaomiyoupin.com/'
          },
          {
            name: '金融', 
            url: 'https://www.xiaomiyoupin.com/'
          },
          {
            name: '小爱开放平台', 
            url: 'https://xiaoai.mi.com/'
          },
          {
            name: '企业团购', 
            url: 'https://www.xiaomiyoupin.com/'
          },
          {
            name: '下载app', 
            url: 'https://www.mi.com/appdownload'
          }
        ]
      }
    },
}
</script>

<style lang="scss" scoped>
.header-main {
  width: 100%;
  background-color: aqua;
}
</style>