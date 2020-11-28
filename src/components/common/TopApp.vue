<template>
  <div id="top-app" v-show="isShow">
    <div class="title">
      <span>网易云音乐</span>
    </div>
    <div class="app">
      <span class="app-title"><a href="https://music.163.com/m/download?dl=%2F%2Fmusic.163.com%2Fapi%2Fpackage%2Fdownload%2Fdeeplink
">下载APP</a></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopApp",
    data() {
      return {
        isShow: true
      }
    },
    created() {
      this.$bus.$on('isShowTopApp',(n) => {
        this.isShow = n
      })

      this.$bus.$on('showTopApp' ,(n) => {
        this.isShow = n
      })
    }
  }
</script>

<style scoped>
  #top-app {
    position: relative;
    height: 80px;
    /*width: 100%;*/
    color: #fff;
    background-color: var(--color-anothor);
    font: 14px/1.5 Helvetica,sans-serif,STHeiTi;
  }
  .title {
    position: relative;
    top: 22px;
    padding-left: 20px;
    font-size: 24px;
  }
  .app {
    position: absolute;
    right: 20px;
    height: 25px;
    line-height: 25px;
    color: #000;
    border: 1px solid #fff;
    background-color: #fff;
    padding-right: 20px;
    border-radius: 30px;
  }
  .app-title {
    padding-left: 10px;;
  }
</style>
