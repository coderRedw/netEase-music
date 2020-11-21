<template>
  <div class="main">
    <div v-for="(item, index) in store" class="main-box" @click="itemClick(index)">
      <img :src="item.picUrl" alt="" @load="mainLoad">
      <span class="title">{{item.name}}</span>
      <i class="listen" >{{(item.playCount / 10000).toFixed(2) + '万'}}</i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MusicBox",
    props: {
      store: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      mainLoad() {
        this.$emit('mainLoad')
      },
      itemClick(index) {
        this.$router.push('/detail/'+ this.store[index].id)
      }
    },
    destroyed() {
      // console.log('123')
    }
  }
</script>

<style scoped>

  .main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .main img {
    width: 100%;
    height: 100%;
  }
  .main-box {
    position: relative;
    margin-top: 10px;
    width: 27%;
    height: 27%;
  }
  .title {
    display: block;
    width: 100%;

    font-size: 12px;
  }
  .listen {
    position: absolute;
    right: 0;
    top: 0;
    color: #fff;
    font-size: 10px;
  }
</style>
