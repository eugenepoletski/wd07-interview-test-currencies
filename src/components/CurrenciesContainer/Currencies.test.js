import React from 'react'
import { mount } from 'enzyme'
import Currencies from './Currencies'

const setup = () => {
  const props = {
    fetchCurrenciesIfNeeded: jest.fn()
  }

  const enzymeWrapper = mount(<Currencies {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Components: <Currencies />', () => {
  it('MUST render self and subcomponents without crashing', () => {
    const { enzymeWrapper } = setup()

    expect( enzymeWrapper.containsAnyMatchingElements(['Rates', 'Converter']) )
    .toBe(true)
  })

  it('MUST call fetchCurrenciesIfNeeded() on mount', () => {
    const { enzymeWrapper, props } = setup()

    expect(props.fetchCurrenciesIfNeeded.mock.calls.length).toBe(1)
  })
})