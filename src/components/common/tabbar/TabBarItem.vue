<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :style="activeStyle"
         :class="{active: this.isActive}">
      <slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'var(--color-high-text)'
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle () {
        return this.isActive ? {color: this.activeColor} : {}
      }
    }
  }
</script>

<style scoped>

  .tab-bar-item {
    flex: 1;
    text-align: center;

    height: 40px;
    line-height: 40px;
  }
  .active {
    /*color: var(--color-high-text);*/
    border-bottom: 1px solid var(--color-high-text);
  }
</style>
