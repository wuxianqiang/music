import jsonp from 'common/js/jsonp'

import {
  commonParams,
  opts
} from './config'

export function getHotKey () {
  let url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
  let data = Object.assign({}, commonParams, {
    g_tk: 5381,
    uin: 0,
    platform: 'h5',
    needNewCode: 1,
    _: 1518929794782
  })
  return jsonp(url, data, opts)
}

export function search (query, page, zhida) {
  let url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
  let data = Object.assign({}, commonParams, {
    g_tk: 5381,
    uin: 0,
    platform: 'h5',
    needNewCode: 1,
    w: query,
    zhidaqu: zhida ? 1 : 0,
    catZhida: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    perpage: 20,
    n: 20,
    p: page,
    remoteplace: 'txt.mqq.all',
    _: 1518930788094
  })
  return jsonp(url, data, opts)
}
