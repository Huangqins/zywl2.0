import axios from 'axios';
//提示框
import { Message } from 'iview';

// const baseURL = location.origin
// 取消Token(解决重复发送相同请求,如有分页应用时开启)
// let pending = [];
// let cancelToken = axios.CancelToken;
// let removePending = (config) => {
//   for (let key in pending) {
//     if (pending[key].u === config.url + '&' + JSON.stringify(config.data)) {
//       pending[key].f();
//       pending.splice(key, 1);
//     }
//   }
// }

// 创建axios实例

const service = axios.create({
  // baseURL: process.env.BASE_API,
  timeout: 15000, // 请求超时时间,
})
// 保存请求路径参数
// let requestPath = ''
//请求拦截器
service.interceptors.request.use(config => {
  // removePending(config);
  // requestPath = config.url
  // config.cancelToken = new cancelToken((c) => {
  //   pending.push({
  //     u: config.url + '&' + JSON.stringify(config.data),
  //     f: c
  //   });
  // });
  // if (store.getters.token && store.getters.userName) {
  //   config.headers['token'] = getToken()
  //   config.headers['userName'] = getUserName()
  // }
  return config
}, error => {
  console.log(error) // for debug
  Promise.reject(error)
})
// 返回拦截器

service.interceptors.response.use(response => {
  // if (requestPath.indexOf('checkUserName') > -1 && response.data.result === 1) {
  //   Message.error({
  //     top: 50,
  //     duration: 3,
  //     content: '用户名已存在'
  //   })
  // } else if (response.data.result === 1 || response.data.result === 3) {
  //   Message.error({
  //     top: 50,
  //     duration: 3,
  //     content: '登录超时或错误请重新登录'
  //   })
  //   // 清除store信息
  //   store.commit('REMOVE_TOKEN');
  //   store.commit('REMOVE_USER_NAME');
    // router.push({ path: '/login' })
  // }
  return response
}, error => {
  console.log('err' + error) // for debug
//   Message.error({
//     top: 50,
//     duration: 3,
//     content: '操作失败'
//   })
  return Promise.reject(error)
})

export  default  service
