<template>
  <div>hhhh</div>
</template>

<script>
import API from  '@/api/user.js'

export default {
  components: {},
  created() {
    this.queryApi()
  },
  data() {
    return {}
  },
  methods: {
    queryApi(){
      API.login().then(res =>{
        console.log("请求成功login",res)
      })
    }
  },
}
</script>

<style>
</style>