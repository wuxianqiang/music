# Vue开发实践总结

组件之间切换用`<keep-alive>`来保存之前的状态
```js
    <keep-alive>
      <router-view/>    
    </keep-alive>
```
组件之间在使用插槽的时候必须要保证数据已经正确获取
```js
     <div class="slider-wrapper" v-if="recommend.length">
        <slider>
          <div v-for="item in recommend">
            <a :href="item.linkUrl">
              <img :src="item.picUrl" alt="photo">
            </a>
          </div>
        </slider>
      </div>
```
轮播图组件
```js
<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot>
      </slot>
    </div>
    <div class="dots">
      <span class="dot" v-for="(dot, index) in dots" :class="{active: currentPageIndex===index}"></span>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {addClass, setCss} from 'common/js/dom'

export default {
  data () {
    return {
      autoPlay: {
        type: Boolean,
        default: true
      },
      currentPageIndex: 0,
      dots: [],
      loop: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      }
    }
  },
  destroyed () {
    clearTimeout(this.timer)
  },
  mounted () {
    setTimeout(() => {
      this._initSliderWidth()
      this._initDots()
      this._initSlider()
      if (this.autoPlay) {
        this._play()
      }
    }, 20)
    window.addEventListener('resize', () => {
      if (!this.slider) {
        return
      }
      this._initSliderWidth(true)
      this.slider.refresh()
    })
  },
  methods: {
    _initSliderWidth (isResize) {
      let width = 0
      let sliderWidth = this.$refs.slider.offsetWidth
      this.children = this.$refs.sliderGroup.children
      for (let child of this.children) {
        addClass(child, 'slider-item')
        setCss(child, 'width', sliderWidth)
        width += sliderWidth
      }
      if (this.loop && !isResize) {
        width += 2 * sliderWidth
      }
      setCss(this.$refs.sliderGroup, 'width', width)
    },
    _initSlider () {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400
        }
      })
      this.slider.on('scrollEnd', () => {
        let pageIndex = this.slider.getCurrentPage().pageX
        this.currentPageIndex = pageIndex
        if (this.autoPlay) {
          clearTimeout(this.timer)
          this._play()
        }
      })
    },
    _initDots () {
      this.dots = new Array(this.children.length)
    },
    _play () {
      this.timer = setTimeout(() => {
        this.slider.next()
      }, 4000)
    }
  }
}
</script>
<style scoped lang="stylus">
  @import "~common/stylus/variable"

  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>
```
