import React from 'react'
import { shallow } from 'enzyme'
import CurrencyDropList from './CurrencyDropList'

describe('Components: <CurrencyDropList />', () => {
  it('Should render without crashing', () => {
    const currencyDropListComponent = shallow(<CurrencyDropList/>)
  })
})