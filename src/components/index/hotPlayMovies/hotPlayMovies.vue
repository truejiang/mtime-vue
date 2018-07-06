<template>
  <div class="hotPlayMovies_wrapper">
    <div class="top">
      <div class="select-loaction">
        <span class="label">正在售票</span>
        <span class="select-bar"> · {{locationInfo.n}}
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-moreunfold"></use>
          </svg>
        </span>
      </div>
      <div class="show-all">
        全部（{{hotPlayMovies.length}}）
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-more"></use>
        </svg>
      </div>
    </div>
    <div class="horizontal-scroll-list-wrap">
      <cube-scroll
        ref="scroll"
        :data="hotPlayMovies"
        :direction="direction">
          <ul class="list-wrapper">
            <li v-for="(item,index) in hotPlayMovies" class="list-item" :key="index">
              <div class="poster-wrapper">
                <span class="label">{{item.isIMAX3D ?'IMAX 3D':(item.isIMAX ? 'IMAX' : '')}}</span>
                <img :src="item.img" alt="">
                <span class="mark" v-show="item.ratingFinal > 0">{{item.ratingFinal}}</span>
              </div>
              <p class="title">{{item.titleCn}}</p>
            </li>
          </ul>
      </cube-scroll>
    </div>
    <city-list></city-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import cityList from '@/components/common/cityList/cityList'
export default {
  data () {
    return {
      direction: 'horizontal'
    }
  },
  components: {
    cityList
  },
  computed: {
    ...mapGetters([
      'locationInfo',
      'hotPlayMovies'
    ])
  }
}
</script>

<style lang="stylus">
.cube-scroll-content
  display inline-block!important
.hotPlayMovies_wrapper
  width 100%
  .top
    width 100%
    display flex
    justify-content space-between
    .select-bar,.show-all
      color #9D9D9D
  .horizontal-scroll-list-wrap
    position: relative
    .cube-scroll-content
      display inline-block
    .cube-scroll-wrapper
      .cube-scroll-list-wrapper
        overflow hidden
        .list-wrapper
          height 100%
          padding 10px 0
          white-space nowrap
          .list-item
            display: inline-block
            margin-right 4px
            .poster-wrapper
              width 166px
              height 210px
              position relative
              img
                width 100%
                height 100%
                position absolute
                top 0
                left 0
              .label
                display block
                position absolute
                right 6px
                top 6px
                background-color rgba(51, 51, 51, 0.6)
                z-index 1
                color #dcd9d9
                padding 2px 4px
                border-radius 2px
              .mark
                z-index 1
                display inline-block
                position absolute
                right 0px
                bottom 0px
                background-color #679C0E
                color #fff
                padding 2px 4px
            .title
              color #414141
              padding 6px 0
              width 166px
              text-align center
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
</style>
