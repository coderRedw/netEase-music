<template>
  <div class="detail">
    <detail-top-image :top-image="topImage" :author="author" :play="play"/>
    <detail-music-tab>
      <div>歌曲列表</div>
    </detail-music-tab>
    <detail-music :song="song" :song-name="songName"/>
    <detail-comment :comments="comments" :hot-comments="hotComments"/>
    <down-load-more/>
  </div>
</template>

<script>
  import {getMusicDetail, getDetailComment} from "network/deatil";

  import DetailTopImage from "./DetailTopImage";
  import DetailMusic from "./DetailMusic";
  import DetailComment from "./DetailComment";

  import DetailMusicTab from "components/content/detaiMusicTab/DetailMusicTab";
  import DownLoadMore from "components/common/downLoadMore/DownLoadMore";

  export default {
    name: "Detail",
    components: {
      DetailTopImage,
      DetailMusic,
      DetailComment,
      DetailMusicTab,
      DownLoadMore
    },
    data() {
      return {
        id: null,
        topImage: null,
        song: null,
        scroll: null,
        author: null,
        comments: [],
        hotComments: [],
        songName: null,
        play: null
      }
    },
    created() {
      //1.保存传入过来的id
      this.id = this.$route.params.id

      //2.请求歌单数据
      getMusicDetail(this.id).then(res => {
        // console.log(res)

        //2请求详情最上面歌单数据
        this.topImage = res.playlist

        //2.请求歌曲
        this.song = res.playlist.tracks

        //3.请求作者
        this.author = res.playlist.creator
        // console.log(this.author.avatarUrl)

        //4.请求歌曲名
        this.songName = res.playlist.tracks[0].name

        //5.请求播放次数
        this.play = res.playlist.playCount
      })
      //3.获取评论数据
      getDetailComment(this.id).then(res => {
        // console.log(res)

        //3.1获取个人评论数据
        this.comments = res.comments
        // console.log(this.comments)

        this.hotComments = res.hotComments
      })
    }
  }
</script>

<style scoped>
  .detail {
    position: relative;
    z-index: 999;
    background-color: #fff;
    height: 100%;
  }
  /*.content {*/
  /*  position: absolute;*/
  /*  top: 170px;*/
  /*  bottom: 80px;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  overflow: hidden;*/
  /*}*/
</style>
