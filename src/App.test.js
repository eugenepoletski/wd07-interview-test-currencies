import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Application', () => {
  it('MUST render component <App /> without crashing', () => {
    const appComponent = shallow(<App />);
  });
});