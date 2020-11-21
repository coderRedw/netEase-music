<template>
  <div class="play">
    <i class="start"></i>
  </div>
</template>

<script>
  export default {
    name: "Play"
  }
</script>

<style scoped>
  .play {
    position: absolute;
    right: 40px;
    top: 0;
    width: 20px;
    height: 20px;
    border: 1px solid #cccccc;
    border-radius: 50%;
  }
  .start {
    position: absolute;
    left: 5px;
    top: 2px;
    border-left: 10px solid #ccc;
    border-top: 8px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 8px solid transparent;
  }
</style>
