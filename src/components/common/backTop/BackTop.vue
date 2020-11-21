<template>
    <div class="back-top">
      <span>top</span>
    </div>
</template>

<script>
    export default {
      name: 'BackTop'
    }
</script>

<style scoped>
  .back-top {
    position: fixed;
    right: 50px;
    bottom: 100px;
    width: 30px;
    height: 30px;
    border: 1px solid var(--color-tint);
    border-radius: 50%;

    color: #000;
    text-align: center;
    line-height: 28px;
  }
</style>
