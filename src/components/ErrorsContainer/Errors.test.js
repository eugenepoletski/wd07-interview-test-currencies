import React from 'react'
import { shallow } from 'enzyme'
import Errors from './Errors'

describe('Components: <Errors />', () => {
  it('Should render without crashing', () => {
    const errorsComponent = shallow(<Errors/>)
  })
})