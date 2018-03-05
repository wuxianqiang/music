import jsonp from 'common/js/jsonp'

import {
  commonParams,
  opts
} from './config'

export function getTopList () {
  let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  let data = Object.assign({}, commonParams, {
    g_tk: 5381,
    uin: 0,
    format: 'jsonp',
    platform: 'h5',
    needNewCode: 1,
    _: 1518919584961
  })
  return jsonp(url, data, opts)
}

export function getMusicList (topid) {
  let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  let data = Object.assign({}, commonParams, {
    g_tk: 5381,
    uin: 0,
    platform: 'h5',
    needNewCode: 1,
    tpl: 3,
    page: 'detail',
    type: 'top',
    topid: topid,
    _: 1518923064817
  })
  return jsonp(url, data, opts)
}
