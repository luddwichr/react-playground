import {shallow} from 'enzyme';
import {ReduxCounterComponent} from './ReduxCounter';
import React from 'react';

describe('ReduxCounter component', () => {
  it('should display the count 0 as default', () => {
    const counter = shallow(<ReduxCounterComponent/>);
    expect(counter.find('#count').text()).toEqual('0');
  });

  it('should display the count passed as property', () => {
    const counter = shallow(<ReduxCounterComponent count={5}/>);
    expect(counter.find('#count').text()).toEqual('5');
  });

  it('should trigger onIncrement if increment button is clicked', () => {
    const onIncrementMock: () => void = jest.fn();
    const counter = shallow(<ReduxCounterComponent onIncrement={onIncrementMock}/>);
    counter.find('#increment').simulate('click');
    expect(onIncrementMock).toHaveBeenCalled();
  });

  it('should trigger onDecrement if decrement button is clicked', () => {
    const onDecrementMock: () => void = jest.fn();
    const counter = shallow(<ReduxCounterComponent onDecrement={onDecrementMock}/>);
    counter.find('#decrement').simulate('click');
    expect(onDecrementMock).toHaveBeenCalled();
  });
});