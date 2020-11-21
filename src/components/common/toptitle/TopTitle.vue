<template>
  <div class="top-title">
    <i class="line"></i>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TopTitle"
  }
</script>

<style scoped>
  .line {
    position: relative;
    left: -10px;
    top: 3px;
    display: inline-block;
    width: 2px;
    height: 20px;
    background-color: red;
  }
  .top-title {
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 10px;
    height: 30px;
    width: 100%;
    font-size: 18px;
  }
</style>
