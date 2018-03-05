<template>
  <div class="singer">
    <listview :data="singers" @select="selectSinger"></listview>
    <router-view></router-view>
  </div>
</template>

<script>
import {getSingerList} from 'api/singer'
import {ERR_OK} from 'api/config'
import Singer from 'common/js/singer'
import Listview from 'base/listview/listview'
import {mapMutations} from 'vuex'

const HOT_NAME = '热门'
const HOT_LENGTH = 10

export default {
  created () {
    this._getSingerList()
  },
  data () {
    return {
      singers: []
    }
  },
  components: {
    Listview
  },
  methods: {
    selectSinger (singer) {
      this.$router.push({
        path: `/singer/${singer.id}`
      })
      this.setSinger(singer)
    },
    _getSingerList () {
      getSingerList().then((res) => {
        if (res.code === ERR_OK) {
          this.singers = this._normalize(res.data.list)
        }
      })
    },
    _normalize (data) {
      let map = {
        hot: {
          title: HOT_NAME,
          item: []
        }
      }
      data.forEach((list, index) => {
        if (index < HOT_LENGTH) {
          map.hot.item.push(new Singer({id: list.Fsinger_mid, name: list.Fsinger_name}))
        }
        let current = list.Findex
        if (!map[current]) {
          map[current] = {
            title: current,
            item: []
          }
        }
        map[current].item.push(new Singer({id: list.Fsinger_mid, name: list.Fsinger_name}))
      })
      let hot = []
      let ret = []
      for (const key in map) {
        let value = map[key]
        if (value.title.match(/[a-zA-Z]/)) {
          ret.push(value)
        } else if (value.title === HOT_NAME) {
          hot.push(value)
        }
      }
      ret.sort((a, b) => {
        return a.title.localeCompare(b.title)
      })
      return hot.concat(ret)
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    })
  }
}
</script>

<style lang="stylus" scoped>
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>