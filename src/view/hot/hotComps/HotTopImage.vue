<template>
  <div class="hot-top-image">
      <div class="title">{{HotTitle.name}}</div>
      <div class="timer">
        <span>更新时间</span>
        <i>{{HotTitle.updateTime | changeTimer}}</i>
      </div>
  </div>
</template>

<script>
  import {formatDate} from "common/utils"

  export default {
    name: "HotTopImage",
    props: {
      HotTitle: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      changeTimer(value) {
        const date = new Date(value)

        return formatDate(date, 'MM月dd日')
      }
    }
  }
</script>

<style scoped>
  .hot-top-image {
    width: 100%;
    height: 150px;
    padding-top: 20px;

    background: url("~assets/img/hot_music_bg_3x.jpg") no-repeat;
    background-size: contain;
  }
  .title {
    color: #fff;
    font-size: 40px;
  }
  .timer {
    color: hsla(0,0%,100%,.8);
  }
</style>
