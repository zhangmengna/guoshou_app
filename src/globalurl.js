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
  // 'dataType':'json',
 // 'Content-Type':  'application/json;charset=UTF-8'
 // 'Content-Type':  'application/x-www-form-urlencoded'
}}


var tmp = {"appCode":"00130801","versionkey":"029f790b9ae226fb811c16b7eb1e1188"}
var param ={data:JSON.stringify(tmp)}

const reqAllUrl = axios.post('/evc/evc/appRequestUrl_versionFuncApp',param, reqHeader)
                            .then(function (response){
                              console.log(response)
                              return response.data.resultMap
                            })
                            .catch(function (error) {
                              return error
                            });

export default{reqAllUrl}
