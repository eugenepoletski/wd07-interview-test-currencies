import React from 'react'
import { shallow } from 'enzyme'
import Converter from './Converter'

describe('Components: <Converter />', () => {
  it('Should render without crashing', () => {
    const converterComponent = shallow(<Converter/>)
  })
})