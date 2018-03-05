<template>
  <div class="wrapper" ref="wrapper">
      <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: []
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    pullup: {
      type: Boolean,
      default: false
    },
    beforeScroll: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      this.slider = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })
      if (this.listenScroll) {
        let me = this
        this.slider.on('scroll', (pos) => {
          me.$emit('scroll', pos)
        })
      }
      if (this.pullup) {
        this.slider.on('scrollEnd', () => {
          if (this.slider.y <= (this.slider.maxScrollY + 50)) {
            this.$emit('scrollToEnd')
          }
        })
      }
      if (this.beforeScroll) {
        this.slider.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }
    },
    enable () {
      this.slider && this.slider.enable()
    },
    refresh () {
      this.slider && this.slider.refresh()
    },
    scrollTo () {
      this.slider && this.slider.scrollTo.apply(this.slider, arguments)
    },
    scrollToElement () {
      this.slider && this.slider.scrollToElement.apply(this.slider, arguments)
    }
  },
  watch: {
    data () {
      setTimeout(() => {
        this.refresh()
      }, 20)
    }
  }
}
</script>
