import {shallow} from 'enzyme';
import React from 'react';
import Counter from './Counter';

describe('Counter', () => {
  it('should initially display a count of 0, if no initial value is given', () => {
    const counter = shallow(<Counter/>);
    expect(counter.find('#count').text()).toEqual('0');
  });

  it('should start counting with the given initial value', () => {
    const counter = shallow(<Counter startCount={5}/>);
    expect(counter.find('#count').text()).toEqual('5');
  });

  it('should display a count of 0 after clicking "+" button', () => {
    const counter = shallow(<Counter/>);
    counter.find('#increase').simulate('click');
    expect(counter.find('#count').text()).toEqual('1');
  });

  it('should display a count of -1 after clicking "-" button', () => {
    const counter = shallow(<Counter/>);
    counter.find('#decrease').simulate('click');
    expect(counter.find('#count').text()).toEqual('-1');
  });

});