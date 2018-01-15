import jsonp from 'common/js/jsonp'

import {
  commonParams,
  opts
} from './config'

export function getRecommend () {
  let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  let data = Object.assign({}, commonParams, {
    uin: 0,
    format: 'json',
    platform: 'h5',
    needNewCode: 1,
    _: 1514299592761
  })
  return jsonp(url, data, opts)
}

export function getDescList () {
}
