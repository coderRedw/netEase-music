<template>
  <div class="play">
    <audio :src="playUrl" controls></audio>
  </div>
</template>

<script>
  import {getMusicDetailPlay} from "network/deatil";

  export default {
    name: "DetailMusicPlay",
    data() {
      return {
        playId: null,
        playUrl: null
      }
    },
    mounted() {
      getMusicDetailPlay(this.$route.params.id).then(res => {
        console.log(res)

        //1.获取歌曲id
        this.playId = res.data[0].id

        //2.获取播放地址
        this.playUrl = res.data[0].url
      })
    }
  }
</script>

<style scoped>
  .play {
    position: absolute;
    top: 50%;
    left: 50%;
    /*height: calc(100% - 120px - 180px);*/
    transform: translate(-50%, -50%);
  }
</style>
