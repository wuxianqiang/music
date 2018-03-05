import {commonParams} from './config'
import axios from 'axios'

export function getLyric (mid) {
  const url = '/api/lyric'
  const data = Object.assign({}, commonParams, {
    pcachetime: 1518769830745,
    songmid: mid,
    loginUin: 1075511055,
    hostUin: 0,
    format: 'json',
    platform: 'yqq',
    needNewCode: 0
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
