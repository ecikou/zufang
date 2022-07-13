<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow @click-left="$router.back()" />
    <van-index-bar :index-list="indexList">

      <van-index-anchor  index="#"  >当前城市
      </van-index-anchor>
      <van-cell title="北京" />
      <van-index-anchor index="热" >热门城市
      <van-cell title="4" />
      <van-cell title="3" />
      <van-cell title="4" />
      <van-cell title="4" />
      </van-index-anchor>

    </van-index-bar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      indexList: ['#', '热', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      cityList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
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
