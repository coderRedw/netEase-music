<template>
  <div class="detail">
    <detail-top-image :top-image="topImage"/>
    <scroll>
        <detail-music :song="song"/>
    </scroll>
  </div>
</template>

<script>
  import {getMusicDetail} from "network/deatil";

  import DetailTopImage from "./DetailTopImage";
  import DetailMusic from "./DetailMusic";
  import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "Detail",
    components: {
      DetailTopImage,
      DetailMusic,
      Scroll
    },
    data() {
      return {
        id: null,
        topImage: null,
        song: null,
        scroll: null
      }
    },
    created() {
      //1.保存传入过来的id
      this.id = this.$route.params.id

      //2.请求歌单数据
      getMusicDetail(this.id).then(res => {
        console.log(res)

        //2请求详情最上面歌单数据
        this.topImage = res.playlist

        //2.请求歌曲
        this.song = res.playlist.tracks



      })
    }
  }
</script>

<style scoped>
  .detail {
    height: 100%;
  }
  .wrapper {
    height: calc(100% - 120px - 80px);
  }
</style>
