<template>
  <div>
    <van-nav-bar
      title="顶部导航"
      left-arrow
      @click-left=" $router.back()"
    />
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  created () { },
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

<style >
* {
  margin: 0;
  padding: 0;
}
#container {
  width: 100vw;
  height: 100vh;
}
</style>
