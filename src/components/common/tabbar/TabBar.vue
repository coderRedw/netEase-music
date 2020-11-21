<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  import TabBarItem from "./TabBarItem";

  export default {
    name: "TabBar",
    components: {
      TabBarItem
    },
    data() {
      return {
      }
    }
  }
</script>

<style scoped>

  #tab-bar {
    display: flex;
    /*position: fixed;*/
    /*top: 80px;*/
    /*left: 0;*/
    /*right: 0;*/

    border-bottom: 1px solid rgba(0,0,0, .2);
  }
  .active {
    color: var(--color-high-text);
  }
</style>
