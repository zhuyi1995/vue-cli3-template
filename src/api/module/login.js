import request from '../../utils/request'

export default {
  // 登陆
  login: params => {
    return request.post('/accelerator/auth/login', params)
  },

  // 用户信息
  get_info: () => {
    return request.post('/accelerator/user-admin/detail')
  },

  // 找回密码
  reset_password: params => {
    return request.post('/accelerator/user-admin/reset-password',params)
  }

}
