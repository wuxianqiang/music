# Vue开发实践总结

组件之间切换用`<keep-alive>`来保存之前的状态
```
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
