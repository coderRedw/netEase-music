<template>
  <div>
    <tab-bar>
      <tab-bar-item path='/home'>
        <div slot="text">推荐音乐</div>
      </tab-bar-item>

      <tab-bar-item path='/hot'>
        <div slot="text">热歌榜</div>
      </tab-bar-item>

      <tab-bar-item path='/search'>
        <div slot="text">搜索</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
