<template>
  <div class="music-list">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "DetailMusicTab"
  }
</script>

<style scoped>
  .music-list {
    padding-left: 20px;

    height: 20px;
    width: 100%;
    background-color: #eee;
    line-height: 20px;

    font-size: 10px;
  }
</style>
