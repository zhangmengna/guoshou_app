/**
 * Created by zhangmengna on 2019/4/26.
 */
import axios from 'axios'
import qs from 'qs'

axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

var reqHeader = {headers: {
  'dataType':'json',
  // 'Content-Type':  'application/json;charset=UTF-8'
  'Content-Type':  'application/x-www-form-urlencoded'
}}

export default function ajax(url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise
    if(type === 'GET'){
      // 准备url query 参数
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach( key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if(dataStr !== ''){
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
        url = url + '?' +dataStr
      }
      // 发送get 请求
      promise = axios.get(url,reqHeader)
    }else{
      // 发送post请求
      promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data)
    })
      .catch(error => {
        reject(error)
      })
  })
}
