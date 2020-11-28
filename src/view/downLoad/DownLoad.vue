<template>
  <div class="download">
    <div class="main-title">网易云音乐</div>
      <span class="open" @click="openApp">打开APP,发现更多好音乐></span>
  </div>
</template>

<script>
  export default {
    name: "DownLoad",
    data() {
      return {
      }
    },
    methods: {
      openApp() {
        this.$router.push('/downLoadApp')
      }
    }
  }
</script>

<style scoped>
  .download {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    height: 80px;
    background: url("~assets/img/recommand.png") no-repeat;
    text-align: center;
  }
  .main-title {
    line-height: 50px;
    font-size: 20px;
  }
  .open {
    color: var(--color-high-text);
    border: 1px solid red;
    padding: 10px 15px;
    border-radius: 30px;
    font-size: 14px;
  }
</style>
