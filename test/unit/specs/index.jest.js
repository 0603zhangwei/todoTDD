import { shallow } from '@vue/test-utils'

import index from '../../../src/views/index'

describe('index', () => {
  it('default render should behave a input with placehoder', () => {
    const wapper = shallow(index)
    expect(wapper.contains('input')).toBe(true)
  })
})
