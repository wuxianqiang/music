import * as types from './mutation-types'

const mutations = {
  [types.SET_INDEX] (state, toindex) {
    state.toindex = toindex
  },
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  }
}

export default mutations
