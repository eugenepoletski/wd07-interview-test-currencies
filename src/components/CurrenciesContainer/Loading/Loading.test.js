import React from 'react'
import { shallow } from 'enzyme'
import Loading from './Loading'

describe('Components: <Loading />', () => {
  it('Should render without crashing', () => {
    const loadingComponent = shallow(<Loading/>)
  })
})