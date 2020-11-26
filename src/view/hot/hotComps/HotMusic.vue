<template>
  <div>
    <div v-for="(item,index) in hotSong" :key="index">
      <div class="main">
        <div class="index">{{index + 1 | addZero}}</div>
        <div class="song">{{item.first}}</div>
        <div class="sing">{{item.second}}</div>
        <play/>

      </div>
    </div>
  </div>
</template>

<script>
  import Play from "../../detail/Play";

  export default {
    name: "HotMusic",
    components: {
      Play
    },
    props: {
      hotSong: {
        type: Array,
        default() {
          return []
        }
      }
    },
    filters: {
      addZero(value) {
        return value = value <= 10 ? '0' + value : value
      }
    }
  }
</script>

<style scoped>
  .main {
    position: relative;
    float: left;
    width: 100%;
    padding-left: 15px;
    height: 60px;
  }
  .index {
    float: left;

    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;

  }
  .song {
    font-size: 16px;
  }
  .sing {
    font-size: 12px;
  }
</style>
