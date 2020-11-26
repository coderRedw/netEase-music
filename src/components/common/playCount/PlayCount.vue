<template>
  <div class="count">
    <div class="listen"><slot></slot></div>
  </div>
</template>

<script>
  export default {
    name: "PlayCount"
  }
</script>

<style scoped>
  .listen {
    position: absolute;
    right: 4px;
    top: 0;
    width: 60px;
    color: #fff;
    font-size: 10px;
  }
</style>
