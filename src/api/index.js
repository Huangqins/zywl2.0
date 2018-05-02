import service from '@/utils/request'
//
let apiMap = {
  Login: {method: 'post', url: '/taskMetadataManage/list.action', reqKey: ['username', 'password']}
}
let Api = {};

function apiCreator() {
  for (let key in apiMap) {
    Api[key] = ({...paramas}) => {
      return service({
        method: `${apiMap[key].method}`,
        url: `${apiMap[key].url}`,
        [apiMap[key].method === 'post' ? 'data' : 'params']: filterKey(apiMap[key].reqKey, apiMap[key].type === 'form' ? formType(paramas): paramas ), //根据提交方式设定key值,暂时设定post及get方式
        headers: { 'Content-Type': apiMap[key].type === 'form' ?  'application/x-www-form-urlencoded': 'application/json'}
      })
    }
  }
}

/**
 * @params Type: Array 需要的key值集合
 * @params Type: Object 该项传入的参数集合
 */
//此方法的作用是筛选需要传递的参数，多余的参数将不会传递，使用Api时可以直接放入整个参数而不必关心是否传入多余参数
function filterKey(arr, obj) {
  let ret = {};
  for (let i of arr) {
    ret[i] = obj[i]
  }
  return ret
}
/*
* 当传输类型为表单时候采用formData构造
* @params Type : Object  data传递的参数
 */
function formType (data) {
  let formdata = new FormData();
  for (let key in data) {
    formdata.append(`${key}`, data[key])
  }
  return formdata
}

apiCreator()

export default Api
