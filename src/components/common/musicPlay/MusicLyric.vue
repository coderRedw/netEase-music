<template>
  <div class="lyric">
    <span class="lyric-title">{{lyric}}</span>
  </div>
</template>

<script>
  import {getMusicLyric} from "network/musicPlay";

  export default {
    name: "MusicLyric",
    props: {
        iid: {
          type: String,
          default: ''
        }
    },
    data() {
      return {
        lyric: null
      }
    },
    created() {
      //获取相关歌词
      getMusicLyric(this.$route.params.id).then(res => {
        console.log(res)

        //1.歌词
        this.lyric = res.lrc.lyric
      })
    },
    filters: {
      delLyric(value) {
      }
    }
  }
</script>

<style scoped>
  .lyric {
    text-align: center;
  }
  .lyric-title {
    display: inline-block;
    width: 80%;
  }
</style>
