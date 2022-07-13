<template>
  <div>
    <form action="/">
      <van-search
        v-model="address"
        show-action
        action-icon="search"
        placeholder="请输入小区或地址"
        label="北京"
      >
        <template #action>
          <van-icon name="location-o" size="20px" />
        </template>
      </van-search>
    </form>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in pic" :key="item.id">
        <van-image width="100%" height="100%" :src="$hop + item.imgSrc" />
      </van-swipe-item>
    </van-swipe>

    <van-grid clickable :column-num="4" border:false>
      <van-grid-item to="/Fiandroom">
        <van-image :src="homepic.pic4" />
        <span>整租</span>
      </van-grid-item>
      <van-grid-item to="/Fiandroom">
        <van-image :src="homepic.pic1" />
        <span>合租</span>
      </van-grid-item>
      <van-grid-item to="/fandmaproom">
        <van-image :src="homepic.pic2" />
        <span>地图找房</span>
      </van-grid-item>
      <van-grid-item to="torent">
        <van-image :src="homepic.pic4" />
        <span>去出租</span>
      </van-grid-item>
    </van-grid>
    <h3 class="group-title">
      租房小组
      <span class="more">更多</span>
    </h3>

    <van-grid direction="horizontal" border:false :column-num="2">
      <van-grid-item
        icon="photo-o"
        text=""
        v-for="item1 in rentgroup"
        :key="item1.id"
      >
        <van-image :src="$hop + item1.imgSrc">

        </van-image>
        <span class="titt">{{ item1.desc }}
          <p class="tiee">{{ item1.title }}</p>
        </span>

      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import pic1 from '@/assets/下载 (1).png'
import pic2 from '@/assets/下载 (2).png'
import pic3 from '@/assets/下载 (3).png'
import pic4 from '@/assets/下载.png'
import { getPicture, getGroupPicture } from '@/api/home'
export default {
  created () {
    this.getPic()
    this.getGroupPicture()
  },
  data () {
    return {
      address: '',
      pic: [],
      homepic: {
        pic1,
        pic2,
        pic3,
        pic4
      },
      rentgroup: []
    }
  },
  methods: {
    async getPic () {
      try {
        const res = await getPicture()
        console.log(res)
        this.pic = res.data.body
        // console.log(this.pic)
      } catch (err) {
        console.log(err)
      }
    },
    async getGroupPicture () {
      try {
        const res = await getGroupPicture()
        console.log(res)
        this.rentgroup = res.data.body
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.my-swipe .van-swipe-item {
  text-align: center;
}
.van-search {
  width: 100%;
  position: absolute;
  top: 25px;
  z-index: 2;
  padding: 0 35px;
}
.van-image {
  width: 60px;
  height: 60px;
}
.group-title {
  position: relative;
  margin: 15px 0 15px 10px;
  font-size: 15px;
  .more {
    color: #787d82;
    position: absolute;
    right: 0;
    font-size: 14px;
    font-weight: 400;
    padding-right: 8px;
  }
}
.van-grid-item__content {
  .titt {
    font-size: 14px;
    color: #787d82;
  }
  .tiee {
    font-size: 14px;
    color: #787d82;
  }
}
</style>
