<template>
  <div class="tab-wrapper">
    <span class="back" @click="back">
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
      </svg>
    </span>
    <span class="title">{{title}}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    backRouter: {
      type: String,
      default: '/'
    },
    isClose: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    back () {
      if (!this.isClose) {
        this.$router.push({path: this.backRouter})
      } else {
        this.$emit('close', false)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.tab-wrapper
  width 100%
  background-color #1c2635
  padding 14px 0
  color #ffffff
  text-align center
  position relative
  .back
    position absolute
    left 10px
</style>
