<template>
  <div class="user-play-list">
    <div class="bac">
      <img :src="message.creator.backgroundUrl" alt="">
    </div>
    <div class="main">
      <div class="listen-count">
        <span></span>
        <div>听歌数</div>
      </div>
      <div class="author-img" v-if="message.creator">
        <img :src="message.creator.avatarUrl" alt="">
      </div>
      <div class="fans-count">
        <span></span>
        <div>粉丝数</div>
      </div>
    </div>
    <div class="author-info" v-if="message.creator.nickname">
      {{message.creator.nickname}}
    </div>
    <div class="follow">+关注</div>
  </div>
</template>

<script>
  import {getUserPlaylist} from "network/deatil";

  export default {
    name: "UserPlayList",
    data() {
      return {
        userId: null,
        message: []
      }
    },
    created() {
      //1.保存用户id
      this.userId = this.$route.params.userId

      //2..获取用户歌单
      getUserPlaylist(this.userId).then(res => {
        console.log(res)

        //2.1获取用户听歌数量、图片、粉丝
        this.message = res.playlist[0]
      })
    }
  }
</script>

<style scoped>
  .user-play-list {
    overflow: hidden;
    color: #fff;
  }
  .main {
    position: relative;
    z-index: 999;
    display: flex;
    margin-top: 5%;
    justify-content: center;
  }
  .listen-count {
    padding-top: 10%;
    padding-right: 10%;
  }
  .fans-count {
    padding-top: 10%;
    padding-left: 10%;
  }
  .author-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
  }
  .author-img img {
    width: 100%;
    height: 100%;
  }
  .author-info {
    position: relative;
    display: flex;
    margin-top: 5%;
    font-size: 18px;
    align-items: center;
    justify-content: center;
  }
  .follow {
    position: relative;
    width: 126px;
    height: 30px;
    margin: 6px auto 0;
    text-align: center;
    border: 1px solid hsla(0,0%,100%,.8);
    border-radius: 15px;
  }
  .bac {
    position: absolute;
    width: 375px;
    height: 241px;
    overflow: hidden;
  }
</style>
