<template>
  <div>
  <detail-music-tab>
    <div>最热评论</div>
  </detail-music-tab>
  <div class="detail-comment" v-if="Object.keys(comments).length !== 0">
    <div class="hot-main" v-for="(hotItem, index) in hotComments">
      <div class="hot-comment-img">
        <img :src="hotItem.user.avatarUrl" alt="">
      </div>
      <div class="hot-comment-title">
        <span class="hot-auther-name">{{hotItem.user.nickname}}</span>
        <div class="hot-timer">{{hotItem.time | showDate}}</div>
        <div class="hot-comment-content">
          <span v-if="hotItem.beReplied.user">回复</span>
          <span v-if="hotItem.beReplied.user">
            <span>{{hotItem.beReplied.user.nickname}}
            </span>
          </span>
          <span class="hot-text">{{hotItem.content}}</span>
        </div>
        <div class="hot-like-count">{{hotItem.likeCount}}</div>
      </div>
    </div>
        <detail-music-tab>
          <div>最新评论</div>
        </detail-music-tab>
      <div class="main" v-for="(item, index) in comments">
        <div class="comment-img">
          <img :src="item.user.avatarUrl" alt="">
        </div>
        <div class="comment-title">
          <span class="auther-name">{{item.user.nickname}}</span>
          <div class="timer">{{item.time | showDate}}</div>
          <div class="comment-content">
            <span v-if="item.beReplied">回复</span>
            <span v-if="item.beReplied.user">
              <span>{{item.beReplied[index].user.nickname}}</span>
            </span>
            <span class="text">{{item.content}}</span>
          </div>
          <span class="like-count">{{item.likedCount}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "common/utils"
  import DetailMusicTab from "components/content/detaiMusicTab/DetailMusicTab";

  export default {
    name: "DetailComment",
    components: {
      DetailMusicTab
    },
    props: {
      comments: {
        type: Array,
        default() {
          return []
        }
      },
      hotComments: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    filters: {
      showDate(value) {
        //1.将时间戳转成Date对象
        const date = new Date(value * 1000)

        //2.将date进行格式化
        return formatDate(date, 'yyyy年MM月dd日')
      }
    }
  }
</script>

<style scoped>
  .detail-comment {
    position: relative;
    color: #333;
    font-size: 14px;
    margin-top: 30px;
    padding-left: 20px;
  }
  .main, .hot-main {
    /*height: 100px;*/
    margin-top: 20px;
    width: 100%;
  }
  .comment-img, .hot-comment-img {
    float: left;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
  }
  .comment-img img, .hot-comment-img img {
    width: 100%;
    height: 100%;
  }
  .comment-title , .hot-comment-title{
    position: relative;
    left: 10px;
  }
  .auther-name, .hot-auther-name {
    font-size: 14px;
    color: #666;
  }
  .timer, .hot-timer {
    font-size: 10px;
    color: #666;
  }
  .comment-content, .hot-comment-content {
    width: 84%;
    margin-left: 30px;
    padding-top: 5px;
  }
  .like-count, .hot-like-count {
    position: absolute;
    right: 55px;
    top: 10px;
  }
</style>
