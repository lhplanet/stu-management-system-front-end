import request from '@/utils/request'
import http from '@/utils/http'

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

// 接口对接
// 获取用户列表
export const getListApi = async(para) => {
  return await http.get('/api/user/list', para)
}
// 新增
export const addUserApi = async(para) => {
  return await http.post('/api/user', para)
}
// 编辑
export const editUserApi = async(para) => {
  return await http.put('/api/user', para)
}
// 删除
export const deleteUserApi = async(para) => {
  return await http.delete('/api/user', para)
}

