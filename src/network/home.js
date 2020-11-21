import {request} from "./index";

//请求推荐歌单
export function getMusicSotre() {
  return request({
    url: '/personalized',
  })
}

//请求最新音乐
export function bestNewMusic() {
  return request({
    url: '/personalized/newsong'
  })
}
