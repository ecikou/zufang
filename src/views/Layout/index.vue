<template>
<div>
  <router-view />

<van-tabbar route active-color="#21b97a">

  <van-tabbar-item replace to="/home" icon="wap-home-o">标签</van-tabbar-item>
  <van-tabbar-item replace to="/Fiandroom" icon="search">找房</van-tabbar-item>
  <van-tabbar-item replace to="/News" icon="newspaper-o">资讯</van-tabbar-item>
  <van-tabbar-item replace to="/My" icon="user-o">我的</van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
export default {
  created () {},
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>

</style>
