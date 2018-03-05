<template>
  <div class="search">
      {{toindex}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['toindex'])
  }
}
</script>

<style lang="stylus" scoped>

</style>