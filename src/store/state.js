import {playMode} from 'common/js/config'
import {loadSearch} from 'common/js/cache'

const state = {
  singer: {},
  toindex: 1,
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  disc: {},
  topList: {},
  searchHistory: loadSearch()
}

export default state
