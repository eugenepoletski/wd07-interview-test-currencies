import React from 'react'
import { shallow } from 'enzyme'
import AddCurrency from './AddCurrency'

describe('Components: <AddCurrency />', () => {
  it('Should render without crashing', () => {
    const addCurrencyComponent = shallow(<AddCurrency/>)
  })
})