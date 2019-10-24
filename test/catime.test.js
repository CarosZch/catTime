import MockDate from 'mockdate'
import catime from '../src'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('catime should return time', () => { // not recommend
  expect(catime(123, 'two'))
    .toBe(123)
})
