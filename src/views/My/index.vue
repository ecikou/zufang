<template>
  <div>
    <van-image
      round
      width="23rem"
      height="20rem"
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
    />
    <div class="My-titel-info">
      <div>
        <img
          class="infoimg"
          src="http://liufusong.top:8080/img/profile/avatar.png"
          alt=""
        />
      </div>
      <div>
        <div v-if="user && user.token">
          <p>好客</p>
          <p class="My_edit__3wqtu" @click="logout">退出</p>
          <p class="My_edit__3wqlv">编辑个人资料</p>
        </div>
        <div v-else>
          <p>游客</p>
          <p class="My_edit__3wqdl" @click="dlnn">去登陆</p>
        </div>
      </div>
    </div>
    <van-grid :column-num="3" :border="false" class="Mytext">
      <van-grid-item icon="star-o" text="我的收藏" />
      <van-grid-item icon="wap-home-o" text="我的出租" />
      <van-grid-item icon="clock-o" text="看房记录" />
      <van-grid-item icon="photo-o" text="成为房主" />
      <van-grid-item icon="manager-o" text="个人资料" />
      <van-grid-item icon="service-o" text="联系我们" />
    </van-grid>
    <div>
      <img
        class="Myimg"
        src="http://liufusong.top:8080/img/profile/join.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'
import { mapState } from 'vuex'
export default {
  name: 'My',
  async created () {
    try {
      const res = await getUserInfo()
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    dlnn () {
      this.$router.push('/login')
    },
    async logout () {
      try {
        await this.$dialog.confirm({ message: '确定退出登录吗？' })
        this.$store.commit('setUser', {})
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
/deep/.van-image__img {
  margin-left: 8px;
}
.Myimg {
  width: 92%;
  margin-left: 15px;
  display: block;
  margin-top: 240px;
}
/deep/.van-grid-item__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 13px;
  color: #333;
  margin-top: 30px;
}
/deep/.Mytext {
  position: absolute;
}
.infoimg {
  width: 80px;
  height: 80px;
  margin-top: -40px;
}
.My-titel-info {
  position: absolute;
  background: #fff;
  width: 75%;
  height: 30%;
  margin-top: -170px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px 3px #ddd;
  padding: 0 20px;
  text-align: center;
  font-size: 13px;
  .My_edit__3wqlv {
    color: #999;
    font-size: 12px;
    margin-top: 20px;
  }
  .My_edit__3wqtu {
    border-radius: 30px;
    color: #fff;
    padding: 2px 15px;
    background: #21b97a;
    font-size: 12px;
    width: 40px;
    margin-left: 104px;
  }
  .My_edit__3wqdl {
    color: #fff;
    padding: 2px 15px;
    background: #21b97a;
    font-size: 12px;
    width: 40px;
    height: 25px;
    margin-left: 104px;
    line-height: 25px;
    border-radius: 5px;
  }
}
</style>
