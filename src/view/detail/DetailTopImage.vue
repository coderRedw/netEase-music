<template>
  <div class="top">
    <div class="main">
      <div class="top-img">
        <img v-if="topImage" :src="topImage.coverImgUrl" alt="">
        <span class="play-list">歌单</span>

        <play-count>
          <i>{{(play / 1000).toFixed(2) + '万'}}</i>
        </play-count>
      </div>
      <div v-if="topImage" class="img-title">
        <div>{{topImage.name}}</div>
      </div>
      <div class="author" @click="authorClick">
        <div class="author-img" v-if="author">
          <img :src="author.avatarUrl" alt="">
        </div>
        <span v-if="author">
          <span class="author-title">{{author.nickname}}</span>
        </span>
        <div v-if="isSign">
          <img class="author-sign" :src="author.avatarDetail.identityIconUrl" alt="">
        </div>
      </div>
    </div>
    <span class="developing">收藏，关注等功能开发中</span>
  </div>
</template>

<script>
  import PlayCount from "components/common/playCount/PlayCount";

  export default {
    name: "DetailTopImage",
    components:{
      PlayCount
    },
    props: {
      topImage: {
        type: Object,
        default() {
          return {}
        }
      },
      author: {
        type: Object,
        default() {
          return {};
        }
      },
      play: {
        type: Number,
        default: 0
      },
      userImg: {
        type: String,
        default: ''
      },
      userId: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        isShow: false
      }
    },
    computed: {
      isSign() {
        return this.avatarDetail == null ? false : true
      }
    },
    methods: {
      authorClick() {
        this.$router.push('/userPlayList/' + this.userId)
      }
    }
  }
</script>

<style scoped>
  .developing {
    position: absolute;
    right: 3%;
    top: 5%;
    color: green;
    font-size: 20px;
    font-weight: 700;
  }
  .top {
    width: 100%;
    height: 187px;
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
    right: -30px;
    bottom: 18px;
    width: 10px;
    height: 10px;
  }

</style>
