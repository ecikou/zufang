<template>
  <div>
    <van-nav-bar title="账号登录">
      <van-icon name="arrow-left" slot="left" @click="$router.back()" />
    </van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model.trim="user.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
      />
      <van-field
        v-model.trim="user.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
      />
      <div style="margin: 16px">
        <van-button block native-type="submit" class="login-btn"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      user: {
        username: '',
        password: ''
      }

    }
  },
  methods: {
    async onSubmit () {
      const user = this.user
      try {
        const res = await login(user)
        console.log(res)
        this.$toast(res.data.description)
        this.$store.commit('setUser', res.data.body)
        if (res.data.status === 200) {
          this.$router.push('/my')
        }
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
// /deep/.van-nav-bar__content {
//   height: 200px !important;
//   width: 100%;
// }

.login-btn {
  background-color: pink;
  color: #ffffff;
}
</style>
