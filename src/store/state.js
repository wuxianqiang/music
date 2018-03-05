import {playMode} from 'common/js/config'
import {loadSearch, loadFavorite} from 'common/js/cache'

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
  searchHistory: loadSearch(),
  favoriteList: loadFavorite()
}

export default state
