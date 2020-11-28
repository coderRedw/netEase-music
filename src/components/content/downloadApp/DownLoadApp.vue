<template>
<div class="down-load-app">
  <div class="top-title">
    <span>若您已安装了网易去音乐，</span>
    <div><span class="top-line">↑↑</span>请下拉并点击“打开”按钮 <span class="top-line">↑↑</span></div>
    <div class="anther">(若无法打开按钮，则 <a href="">点此打开</a>)</div>
  </div>
  <div class="app">
    <img src="https://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg" alt="">
    <div class="downLoading">
      <a href="https://music.163.com/m/download?dl=%2F%2Fmusic.163.com%2Fapi%2Fpackage%2Fdownload%2Fdeeplink">立即下载</a>
    </div>
  </div>
  <back-step/>
</div>
</template>

<script>
  import BackStep from "components/common/backStep/BackStep";

  export default {
    name: "DownLoadApp",
    components: {
      BackStep
    }
  }
</script>

<style scoped>
  .down-load-app {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: rgba(0,0,0, .9);
    color: #fff;
  }
  .top-title {
    margin-top: 20px;
    text-align: center;
  }
  .top-line:first-child {
    padding-right: 5px;
  }
  .top-line:last-child {
    padding-left: 5px;
  }
  .anther {
    padding-top: 20px;
    color: #999;
    font-size: 12px;
  }
  .app {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .app img {
    width: 120px;
    height: 120px;
  }
  .downLoading {
    margin-top: 20px;
    padding: 10px 50px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 20px;
    border-radius: 10px
  }
  .downLoading a {
    color: #fff;
  }
</style>
