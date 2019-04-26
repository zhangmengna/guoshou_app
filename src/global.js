import axios from 'axios'

export const urlAll = axios.post('/evc/evc/appRequestUrl_versionFuncApp.action',
  {"appCode":"00130801","versionkey":"029f790b9ae226fb811c16b7eb1e1188"})
  .then(function (response) {
    return response.resultMap
    console.log(urlArray);
  })
  .catch(function (error) {
    console.log(error);
  });

