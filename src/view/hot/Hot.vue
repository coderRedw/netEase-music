<template>
  <div class="hot">
    <hot-top-image :hot-title="hotTitle"/>
    <hot-music :hot-song="hotSong"/>
  </div>
</template>

<script>
  import {getHotMusic} from "network/hot";

  import HotTopImage from "./hotComps/HotTopImage";
  import HotMusic from "./hotComps/HotMusic";

  export default {
    name: "Hot",
    components: {
      HotTopImage,
      HotMusic
    },
    data() {
      return {
        hotTitle: {},
        hotSong: []
      }
    },
    created() {
      getHotMusic().then(res => {
        console.log(res)

        //1.获取热歌榜
        this.hotTitle = res.list[3]

        //2.获取歌曲
        this.hotSong = res.list[3].tracks
      })
    }
  }
</script>

<style scoped>

</style>
