import * as Con from "./constant"

function isDate(obj) {
  // valueOf() can be used in moment
  if (typeof obj !== 'number' && obj.__proto__ !== Date.prototype && !obj.format) {
    throw Error(Con.INVALID_DATE_STRING)
  } else {
    return
  }
}

export default {
  isDate
}
