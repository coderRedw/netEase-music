<template>
  <div class="main">
    <div v-for="(item, index) in store" class="main-box" @click="itemClick(index)">
      <img :src="item.picUrl" alt="" @load="imgLoad">
      <span class="title">{{item.name}}</span>
      <play-count>
<!--        (item.playCount / 10000).toFixed(2) + '万'-->
        <i class="listen" >{{(item.playCount / 10000).toFixed(2) + '万'}}</i>
      </play-count>
    </div>
  </div>
</template>

<script>
  import PlayCount from "components/common/playCount/PlayCount";

  export default {
    name: "MusicBox",
    components: {
      PlayCount
    },
    props: {
      store: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed: {
      // contain() {
      //   if (this.store.playCount <= 1000) {
      //     return this.store.playCount
      //   }else if (this.store.playCount >= 10000) {
      //     return  (this.store.playCount / 10000).toFixed(2) + '万'
      //   } else  {
      //     return  (this.store.playCount / 10000).toFixed(2) + '亿'
      //   }
      // }
    },
    methods: {
      imgLoad() {
        this.$emit('imgLoad')
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
    justify-content: space-evenly;
    width: 100%;
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
</style>
