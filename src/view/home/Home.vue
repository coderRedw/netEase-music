<template>
  <div id="home">
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contenScroll">
      <music-sotre :store="store"/>
      <music-box :store="store" @mainLoad="mainLoad"/>
      <new-music :new-music="newMusic"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isBackTop"/>
  </div>
</template>
<script>
  import MusicSotre from "./homeCmops/MusicSotre";
  import MusicBox from "./homeCmops/MusicBox";
  import Scroll from "components/common/scroll/Scroll";
  import NewMusic from "./newMusic/NewMusic";
  import BackTop from "components/common/backTop/BackTop";

  import {getMusicSotre} from "network/home";
  import {bestNewMusic} from "network/home";

  export default {
    name: "Home",
    components: {
      MusicSotre,
      MusicBox,
      Scroll,
      NewMusic,
      BackTop
    },
    data() {
      return {
        iid: null,
        store: [],
        newMusic: [],
        isBackTop: true
      }
    },
    created() {
      //1。请求推荐歌单数据
      getMusicSotre().then(res => {
        console.log(res.result)
        this.store = res.result
        this.iid = res.result[0].id
      })

      //2。请求最新音乐数据
      bestNewMusic().then(res => {
        // console.log(res)
        this.newMusic = res.result
      })
    },
    methods: {
      mainLoad() {
        this.$refs.scroll.refresh()
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      contenScroll(position) {
        // console.log(position);
        this.isBackTop = (-position.y) > 300
      }
    }
  }
</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
    /*width: 100%;*/
  }
  .content {
    /*position: absolute;*/
    /*top: 120px;*/
    /*bottom: 80px;*/
    /*left: 0;*/
    /*right: 0;*/
    height: calc(100% - 120px - 80px);
    overflow: hidden;
  }
</style>
