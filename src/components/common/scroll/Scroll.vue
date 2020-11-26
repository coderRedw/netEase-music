<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType
      })
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
      // console.log(this.scroll)
    },
    methods: {
      scrollTo(start, end, time) {
        this.scroll && this.scroll.scrollTo(start, end, time)
      },
      refresh() {
        // console.log('-----')
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
</style>
