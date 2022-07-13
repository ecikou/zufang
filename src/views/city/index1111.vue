<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow @click-left="$router.back()" />
    <van-index-bar :index-list="indexList">
      <van-index-anchor  index="#">当前城市
        <van-cell title="北京" />
      </van-index-anchor>

      <van-index-anchor index="热" >热门城市
      <van-cell title="4" />
      <van-cell title="3" />
      <van-cell title="4" />
      <van-cell title="4" />
      </van-index-anchor>

      <van-index-anchor index="A" >A
      <van-cell title="爱山" />
      <van-cell title="爱山" /><van-cell title="爱山" /><van-cell title="爱山" /><van-cell title="爱山" /><van-cell title="爱山" /><van-cell title="爱山" /><van-cell title="爱山" /><van-cell title="爱山" /><van-cell title="爱山" /><van-cell title="爱山" /><van-cell title="爱山" /><van-cell title="爱山" /><van-cell title="爱山" /><van-cell title="爱山" /><van-cell title="爱山" /><van-cell title="爱山" /><van-cell title="爱山" /><van-cell title="爱山" /><van-cell title="爱山" />
      </van-index-anchor>

    </van-index-bar>
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
