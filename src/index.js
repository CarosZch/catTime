import * as Con from './constant'
import Utils from './utils'

function catime(date, format) {
  return Con.SECONDS_A_MINUTE + date + format + Utils.getTime()
}

export default catime
