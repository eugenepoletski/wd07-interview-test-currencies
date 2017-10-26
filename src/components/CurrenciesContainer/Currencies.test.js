import React from 'react';
import { shallow } from 'enzyme';
import Currencies from './Currencies';

describe('Components: Currencies', () => {
  it('MUST render component <Currencies /> without crashing', () => {
    const currencies = shallow(<Currencies />);
  });
});