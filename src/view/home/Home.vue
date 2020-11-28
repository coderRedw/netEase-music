<template>
  <div id="home">
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contenScroll">
      <music-sotre :store="store"/>
      <music-box :store="store" @imgLoad="imgLoad"/>
      <new-music :new-music="newMusic" :id="iid"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isBackTop"/>
    <div class="bug-title" v-show="isToast">
      进来可能有很多Bug,
      常见的是首页"最新音乐"没有加载过来倒致无法下拉
    <span class="speaking">(本人技术不精，以后调整)</span></div>
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
        isBackTop: true,
        saveY: null,
        isShow: true,
        isToast: false
      }
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()

      this.$bus.$emit('showTopApp',true)
    },
    deactivated() {
      this.saveY = this.$refs.scroll.scroll.y

      this.$bus.$emit('isShowTopApp', false)
    },
    created() {
      //1。请求推荐歌单数据
        this.getMusicSotre()

      //2。请求最新音乐数据
      this.bestNewMusic()
    },
    methods: {
      /**
      *  事件监听的方法
       */
      //点击返回到顶部
      backClick() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      //显示隐藏
      contenScroll(position) {
        // console.log(position);
        this.isBackTop = (-position.y) > 300
      },
      //当图片加载完成后
      imgLoad() {
        this.$refs.scroll.refresh()
        // const refresh = this.$refs.scroll.refresh
        // this.debounce(refresh, 500)
        // refresh()

        this.isToast = true
        setTimeout(() => {
          this.isToast = false
        },6000)
      },

      debounce(fun, delay) {
        let timer = null
        return function (...arg) {
          if (timer) clearTimeout(timer)
          timer = setTimeout( () => {
            fun.apply(this, arg)
          }, delay)
        }
      },
      /**
       *  网络请求的方法
       */
      //1。请求推荐歌单数据
      getMusicSotre() {
        getMusicSotre().then(res => {
          // console.log(res.result)
          this.store = res.result
          this.iid = res.result[0].id
        })
      },
      //2。请求最新音乐数据
      bestNewMusic() {
        bestNewMusic().then(res => {
          // console.log(res)
          this.newMusic = res.result
        })
      }
    }
  }
</script>

<style scoped>
  .bug-title {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    color: #fff;
    font-size: 16px;
    padding: 5px 10px;
    background-color: rgba(0, 0, 0, .9);
    border-radius: 10px;
  }
  .speaking {
    font-size: 12px;
    color: var(--color-high-text);
  }



  #home {
    position: relative;
    height: calc(100vh - 120px);
    /*width: 100%;*/
  }
  .content {
    position: absolute;
    top: 0;
    bottom: 80px;
    left: 0;
    right: 0;
    /*height: calc(100% - 120px - 80px);*/
    overflow: hidden;
  }
</style>
