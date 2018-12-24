import {shallow} from 'enzyme';
import React from 'react';
import App from './App';

it('renders without crashing', () => {
  const element = shallow(<App/>);
  expect(element).not.toBeNull();
});