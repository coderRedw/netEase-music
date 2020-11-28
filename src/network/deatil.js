import {request} from "./index";

//获取歌单地址
export function getMusicDetail(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

//获取歌曲播放地址
export function getMusicDetailPlay(id) {
  return request({
    url: 'song/url',
    params: {
      id
    }
  })
}

//获取歌单评论地址
export function getDetailComment(id) {
  return request({
    url: '/comment/playlist',
    params: {
      id
    }
  })
}

//获取用户歌单
export function getUserPlaylist(uid) {
  return request({
    url: '/user/playlist',
    params: {
      uid
    }
  })
}


