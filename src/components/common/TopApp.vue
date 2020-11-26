<template>
  <div id="top-app">
    <div class="title">
      <span>网易云音乐</span>
    </div>
    <div class="app">
      <span class="app-title">下载APP</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopApp",
    data() {
      return {

      }
    },
    computed: {
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
