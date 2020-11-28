<template>
<div class="play">
    <music-lyric :iid="playId"/>
    <div class="developing">相关功能开发中</div>
  <audio :src="playUrl" controls class="audio"></audio>
  <back-step/>
</div>

</template>

<script>
  import {getMusicDetailPlay} from "network/deatil";

  import MusicLyric from "./MusicLyric";
  import Scroll from "../scroll/Scroll";
  import BackStep from "../backStep/BackStep";


  export default {
    name: "MusicPlay",
    components: {
      MusicLyric,
      Scroll,
      BackStep
    },
    data() {
      return {
        playId: null,
        playUrl: null,
        songName: null
      }
    },
    created() {
      getMusicDetailPlay(this.$route.params.id).then(res => {
        console.log(res)

        //1.获取歌曲id
        // this.playId = res.data[0].id
        this.playId = this.$route.params.id
        //2.获取播放地址
        this.playUrl = res.data[0].url
      })
      this.$bus.$on('songName',(n) => {
        //保存歌曲名
        this.songName = n
      })
    }
  }
</script>

<style scoped>
  .developing {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 30px;
    color: var(--color-high-text);
    background-color: #333;
  }
  .play {
    height: 100vh;
    position: relative;
    z-index: 999;
    background-color: #fff;
  }
  .audio {
    position: fixed;
    bottom: 120px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
