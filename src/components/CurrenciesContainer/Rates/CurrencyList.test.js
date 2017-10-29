import React from 'react'
import { shallow } from 'enzyme'
import CurrencyList from './CurrencyList'

describe('Components: <CurrencyList />', () => {
  it('MUST render without crashing', () => {
    const currencyListComponent = shallow(<CurrencyList/>)
  })
})