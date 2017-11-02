import React from 'react'
import { shallow } from 'enzyme'
import BaseCurrencyDropList from './BaseCurrencyDropList'

describe('Components: <BaseCurrencyDropList />', () => {
  it('Should render without crashing', () => {
    const baseCurrencyDropListComponent = shallow(<BaseCurrencyDropList/>)
  })
})