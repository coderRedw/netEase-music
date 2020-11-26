<template>
  <div class="detail-music">
    <div v-for="(item, index) in song" class="music-main">
      <div class="music-item" @click="musicClick(index)">
        <span class="music-item-index">{{index + 1}}</span>
        <span class="song-title">{{item.name}}</span>
        <div class="sing-title">{{item.ar[0].name}} - {{item.al.name}}</div>
        <play/>
      </div>
    </div>
  </div>
</template>

<script>
  import Play from "./Play";

  export default {
    name: "DetailMusic",
    components: {
      Play
    },
    props: {
      song: {
        type: Array,
        default() {
          return []
        }
      },
      songName: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        songId: null
      }
    },
    methods: {
      musicClick(index) {
        //利用路由跳转到对应的播放页面
        this.$router.push('/play/' + this.song[index].id)
        this.songId = this.song[index].id
      }
    },
    created() {
      this.$bus.$emit('songName',this.songName)
    }
  }
</script>

<style scoped>
  .music-main {
    position: relative;
    overflow: hidden;
  }

  .music-item {
    width: 70%;
    height: 50px;
    padding-left: 20px;
    color: #333;
    margin-top: 10px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .music-item-index {
    float: left;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }
  .song-title {
    font-size: 16px;
  }
  .sing-title {
    font-size: 12px;
    color: #888;
  }
</style>
