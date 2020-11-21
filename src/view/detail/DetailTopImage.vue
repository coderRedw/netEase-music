<template>
  <div class="top">
    <div class="main">
      <div class="top-img">
        <img v-if="topImage" :src="topImage.coverImgUrl" alt="">
        <span class="play-list">歌单</span>
      </div>
      <div v-if="topImage">
        <div class="img-title">{{topImage.name}}</div>
      </div>
      <div class="author">
        <div class="author-img" v-if="topImage.creator.avatarUrl">
          <img :src="topImage.creator.avatarUrl" alt="">
        </div>
        <span v-if="topImage.creator.nickname">
          <span class="author-title">{{topImage.creator.nickname}}</span>
        </span>
        <div v-if="topImage.creator.avatarDetail">
          <img class="author-sign" :src="topImage.creator.avatarDetail.identityIconUrl" alt="">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailTopImage",
    props: {
      topImage: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .top {
    width: 100%;
    height: 147px;
  }
  .top-img {
    position: relative;
    float: left;
    margin-top: 20px;
    margin-left: 20px;
    width: 126px;
    height: 126px;
  }
  .top-img img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .play-list {
    position: absolute;
    top: 10px;
    left: 0;

    width: 38px;
    height: 23px;
    text-align: center;
    line-height: 25px;
    font-size: 14px;
    background-color: var(--color-tint);
    color: #fff;

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .img-title {
    position: relative;
    left: 10px;
    padding-top: 20px;
    color: #000;
    font-size: 15px;
  }
  .author {
    position: relative;
    height: 40px;
  }
  .author-img {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 50%;
    overflow: hidden;
  }
  .author-img img {
    width: 100%;
    height: 100%;
  }
  .author-title {
    position: absolute;
    top: 50%;
    padding-left: 10px;
    font-size: 14px;
  }
  .author-sign {
    position: relative;
    right: 10px;
    bottom: 0;
    width: 10px;
    height: 10px;
  }

</style>
