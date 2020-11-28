<template>
  <div class="back-step">
    <div class="left" @click="backStep">
      <i></i>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
  export default {
    name: "BackStep",
    methods: {
      backStep() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .back-step {
    position: fixed;
    bottom: 80px;
    left: 30px;
  }
  .left{
    width: 40px;
    height: 40px;
    padding-left: 4px;
    border: 3px solid var(--color-high-text);
    border-radius: 50%;
  }
  .left::before, .left::after {
    content: '';
    display: inline-block;
    width: 15px;
    height: 2px;
    background-color: green;
  }
  .left::before {
    transform: rotate(-30deg);
  }
  .left::after {
    position: relative;
    left: -15px;
    bottom: -7px;
    transform: rotate(30deg);
  }
  .left i {
    position: absolute;
    top: 50%;
    left: 20%;
    display: inline-block;
    width: 23px;
    height: 2px;
    background-color: green;
  }
</style>
