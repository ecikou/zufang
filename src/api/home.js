import request from '@/utils/request'
export const getPicture = () => {
  return request({
    url: '/home/swiper'

  })
}
export const getGroupPicture = () => {
  return request({
    url: '/home/groups',
    query: {
      area: 'AREA|88cff55c-aaa4-e2e0'
    }
  })
}
