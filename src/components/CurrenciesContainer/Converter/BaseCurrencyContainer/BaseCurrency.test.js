import React from 'react'
import { shallow } from 'enzyme'
import BaseCurrency from './BaseCurrency'

describe('Components: <BaseCurrency />', () => {
  it('Should render without crashing', () => {
    const baseCurrencyComponent = shallow(<BaseCurrency/>)
  })
})