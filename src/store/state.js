import {playMode} from 'common/js/config'

const state = {
  singer: {},
  toindex: 1,
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  disc: {}
}

export default state
