import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Application', () => {
  it('Should render component <App /> without crashing', () => {
    const appComponent = shallow(<App />);
  });
});