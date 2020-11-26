<template>
  <div id="app">
    <top-app/>
    <main-tab-bar/>
    <keep-alive exclude="Detail,MusicPlay">
      <router-view/>
    </keep-alive>
    <down-load/>
  </div>
</template>

<script>
  import TopApp from "components/common/TopApp";
  import MainTabBar from "components/content/mainTabBar/MainTabBar";
  import DownLoad from "view/downLoad/DownLoad";

  export default {
    name: 'App',
    components: {
      TopApp,
      MainTabBar,
      DownLoad
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
