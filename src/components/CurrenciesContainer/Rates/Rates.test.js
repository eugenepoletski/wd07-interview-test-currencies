import React from 'react'
import { shallow } from 'enzyme'
import Rates from './Rates'

describe('Components: <Rates />', () => {
  it('MUST render without crashing', () => {
    const ratesComponent = shallow(<Rates/>)
  })
})