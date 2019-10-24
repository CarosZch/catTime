import Utils from './../src/utils'
import * as Con from './../src/constant'
import moment from 'moment'

it('Utils.isDate should return true', () => { // not recommend
  expect(Utils.isDate(Date.now()))
    .toBe(undefined)
  expect(Utils.isDate(new Date()))
    .toBe(undefined)
  expect(Utils.isDate(moment()))
    .toBe(undefined)
  expect(() => Utils.isDate('moment'))
    .toThrow(Con.INVALID_DATE_STRING)
})
