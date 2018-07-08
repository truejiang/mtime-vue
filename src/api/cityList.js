import {BASE_URL} from './config'
import axios from 'axios'
import qs from 'qs'

export function getCityList (type, data) {
  const url = BASE_URL
  let params = {
    url: 'https://api-m.mtime.cn/Showtime/HotCitiesByCinema.api'
  }
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params))
      .then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
  })
}
