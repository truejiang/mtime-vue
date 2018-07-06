<template>
  <div id="app">
    <v-tab></v-tab>
    <router-view class="app-wrapper"></router-view>
  </div>
</template>

<script>
import vTab from '@/components/common/tab/tab'

export default {
  name: 'App',
  components: {
    vTab
  }
}
</script>

<style lang="stylus">
@import 'assets/stylus/reset'
#app
  .app-wrapper
    width 100%
    height 100%
    padding 10px
</style>
