<template>
  <div class="tab">
    <router-link class="tab-item" tag="div" to='/index'>
      <span class="link-title">首页</span>
    </router-link>
    <router-link class="tab-item" tag="div" to='/ticket'>
      <span class="link-title">购票</span>
    </router-link>
    <router-link  class="tab-item" tag="div" to='/mall'>
      <span class="link-title">商城</span>
    </router-link>
    <router-link  class="tab-item" tag="div" to='/news'>
      <span class="link-title">发现</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus">
.tab
  background-color #1c2635
  padding 14px 0
  width 100%
  display flex
  justify-content space-around
  .tab-item
    &.router-link-active
      .link-title
        color #fff
        &:after
          content ''
          position absolute
          width 100%
          height 4px
          background-color #fff
          bottom -14px
          left 0
    .link-title
      color #bbb
      font-size 16px
      position relative
</style>
