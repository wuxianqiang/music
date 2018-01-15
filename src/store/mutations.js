import * as types from './mutation-types'

const mutations = {
  [types.SET_INDEX] (state, toindex) {
    state.toindex = toindex
  }
}

export default mutations
