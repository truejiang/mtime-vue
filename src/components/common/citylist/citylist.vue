<template>
  <div class="citylist-wrapper">
    <tab :isClose="true" :title="title" @close="close"></tab>
    <div class="search-bar">
      <input class="search-input" type="text" v-model="cityName">
      <span class="search-btn">搜索</span>
    </div>
    <div class="getLocation-bar">
      <span class="title">当前城市</span>
      <span class="location">位置获取失败，请开启定位功能</span>
    </div>
    <cube-index-list
      :data="cityList"
      @select="selectItem"
      @title-click="clickTitle"></cube-index-list>
  </div>
</template>

<script>
import tab from '../base/tab/tab'
import { mapGetters } from 'vuex'
import { getCityList } from '@/api/cityList'
export default {
  data () {
    return {
      title: '当前城市',
      cityName: '',
      cityList: ''
    }
  },
  created () {
    getCityList().then((res) => {
      if (res.status === 200) {
        this.cityList = this._formatCityList(res.data.p)
      }
    })
  },
  computed: {
    ...mapGetters([
      'locationInfo'
    ])
  },
  methods: {
    close (hide) {
      console.log(hide)
    },
    _formatCityList (cityList) {
      let listMap = new Map()
      let eles = {}
      let firstChar = ''
      cityList.forEach((ele, index) => {
        eles = {
          name: ele.n,
          value: ele.id,
          pinyin: ele.pinyinShort,
          pinyinFull: ele.pinyinFull
        }
        firstChar = ele.pinyinFull.charAt(0).toUpperCase()
        if(index >= 11) {
          if (!!listMap.has('★Hot City')) {
            listMap.get('★Hot City').push(eles)
          } else {
            listMap.set('★Hot City', [].concat(eles))
          }
        }
        if (listMap.has(firstChar)) {
          listMap.get(firstChar).push(eles)
        } else {
          listMap.set(firstChar, [].concat(eles))
        }
      })
      let arr = []
      for (let [key, value] of listMap.entries()) {
        arr.push({
          name:key,
          items: value
        })
      }
      arr.sort((a, b) => {
        return a.name.charCodeAt() - b.name.charCodeAt()
      })
      return arr
    },
    selectItem (item) {
      console.log(item.name)
    },
    clickTitle (title) {
      console.log(title)
    }
  },
  components: {
    tab
  }
}
</script>

<style lang="stylus">
.cube-scroll-content
  width 100%
.citylist-wrapper
  width 100%
  height 100%
  position fixed
  top 0
  left 0
  background-color #EBEBEB
  z-index 99
  .search-bar
    width 100%
    padding 10px 14px
    display flex
    line-height 26px
    .search-btn
      padding 0 4px
      flex 0 0 40px
      margin-left 6px
      color #7d7d7d
      font-weight bold
    .search-input
      flex 1
      height 26px
      border 1px solid #bababa
      border-radius 4px
  .getLocation-bar
    width 100%
    background-color #fff
    border 1px solid #e2e2e2
    border-left none
    border-right none
    padding 10px 0
    .title
      color #898989
      margin-left 14px
    .location
      color #3A3A3A
</style>
