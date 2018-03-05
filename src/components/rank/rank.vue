<template>
  <div>

  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  created () {
    this.setIndex(2)
  },
  methods: {
    ...mapMutations({
      setIndex: 'SET_INDEX'
    })
  }
}
</script>

<style lang="stylus" scoped>

</style>
