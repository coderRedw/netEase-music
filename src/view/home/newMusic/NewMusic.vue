<template>
  <div class="new-music">
    <top-title>
      <span>最新音乐</span>
    </top-title>
    <div v-for="(item, index) in newMusic" class="main" @click="itemClick(index)">
      <span class="song">{{item.name}}</span>
      <span v-if="item.song.alias[0]">
        <span class="song-anther">{{'(' + item.song.alias[0] + ')'}}</span>
      </span>
      <div class="sing">{{item.song.artists[0].name + ' - ' + item.song.name}}</div>
      <i class="start"></i>
    </div>
  </div>
</template>

<script>
  import TopTitle from "components/common/toptitle/TopTitle";

  export default {
    name: "NewMusic",
    components: {
      TopTitle,
    },
    props: {
      newMusic: {
        type: Array,
        default() {
          return [];
        }
      },
      id: {
        type: Number,
        default: 0
      }
    },
    methods: {
      itemClick(index) {
        this.$router.push('/play/' + this.newMusic[index].id)
      }
    }
  }
</script>

<style scoped>
  .main {
    position: relative;
    height: 50%;
    padding-left: 12px;
    margin-top: 10px;
    border-bottom: 1px solid #eee;
  }
  .song {
    font-size: 18px;
    font-weight: 400;
  }
  .sing {
    padding-top: 10px;
    font-size: 12px;
  }
  .song-anther {
    display: inline-block;
    width: 60%;
    color: var(--color-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 4px;
  }
  .start {
    position: absolute;
    right: 30px;
    top: 20%;
    width: 20px;
    height: 20px;
    border: 1px solid var(--color-tint);
    border-radius: 50%;
  }
  .start::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);

    border-left: 6px solid var(--color-tint);
    border-top: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid transparent;

  }
</style>
