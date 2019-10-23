import MockDate from 'mockdate'
import catime from '../src'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Uses spanish locale through constructor', () => { // not recommend
  expect(catime('one', 'two'))
    .toBe(`60onetwo1}`)
})
