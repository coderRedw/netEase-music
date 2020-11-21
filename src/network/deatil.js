import {request} from "./index";

export function getMusicDetail(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export function getMusicDetailPlay(id) {
  return request({
    url: 'song/url',
    params: {
      id
    }
  })
}
