import React from 'react'
import { shallow } from 'enzyme'
import CurrenciesUpdate from './CurrenciesUpdate'

describe('Components: <CurrenciesUpdate />', () => {
  it('Should render without crashing', () => {
    const currenciesUpdateComponent = shallow(<CurrenciesUpdate/>)
  })
})