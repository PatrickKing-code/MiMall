<template>
  <div>
      <NavHeader />
      <router-view></router-view>
      <NavFooter />
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'
export default {
    name: "home",
    components: {
        NavFooter,
        NavHeader
    }
}
</script>

<style>

</style>