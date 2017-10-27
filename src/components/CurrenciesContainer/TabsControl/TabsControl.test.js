import React from 'react'
import { shallow } from 'enzyme'
import TabsControl from './TabsControl'

describe('Components: <TabsControl />', () => {
  it('MUST render without crashing', () => {
    const tabsControlComponent = shallow(<TabsControl/>)
  })
})