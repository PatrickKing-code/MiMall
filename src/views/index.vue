<template>
  <div>
  </div>
</template>

<script>
import {Login} from '../api/index'
export default {
    name: 'index',
    mounted() {
        Login().then( res=> {
            console.log(res);
        })
    },
    methods: {
        login() {

        }
    }
}
</script>

<style>

</style>