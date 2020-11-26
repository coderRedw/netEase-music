import {request} from "./index";

export function getHotMusic() {
    return request({
      url: '/toplist/detail'
    })
}
