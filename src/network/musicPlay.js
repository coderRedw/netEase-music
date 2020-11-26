import {request} from "./index";

export function getMusicLyric(id) {
  return request({
    url: '/lyric',
    params: {
      id
    }
  })
}
