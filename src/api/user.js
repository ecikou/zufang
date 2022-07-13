import request from '@/utils/request'
import store from '@/store'
export const login = ({ username, password }) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: {
      username,
      password
    }
  })
}
export const getUserInfo = () => {
  return request({
    url: '/user',
    headers: {
      Authorization: store.state.user.token
    }
  })
}
