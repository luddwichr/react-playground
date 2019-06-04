import {shallow} from 'enzyme';
import {ReduxCounter} from './ReduxCounter';
import React from 'react';

describe('ReduxCounter component', () => {
  it('should display the count 0 as default', () => {
    const counter = shallow(<ReduxCounter/>);
    expect(counter.find('#count').text()).toEqual('0');
  });

  it('should display the count passed as property', () => {
    const counter = shallow(<ReduxCounter count={5}/>);
    expect(counter.find('#count').text()).toEqual('5');
  });

  it('should trigger onIncrement if increment button is clicked', () => {
    const onIncrementMock: () => void = jest.fn();
    const counter = shallow(<ReduxCounter onIncrement={onIncrementMock}/>);
    counter.find('#increment').simulate('click');
    expect(onIncrementMock).toHaveBeenCalled();
  });

  it('should trigger onDecrement if decrement button is clicked', () => {
    const onDecrementMock: () => void = jest.fn();
    const counter = shallow(<ReduxCounter onDecrement={onDecrementMock}/>);
    counter.find('#decrement').simulate('click');
    expect(onDecrementMock).toHaveBeenCalled();
  });
});