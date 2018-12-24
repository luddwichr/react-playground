import {
  MyComposingComponent,
  MyFunctionComponent,
  MyStatefulClassComponent,
  MyStatelessClassComponent,
} from './basics';
import {shallow} from 'enzyme';
import React from 'react';

describe('Function Component', () => {
  it('can be configured via properties', () => {
    const element = shallow(<MyFunctionComponent name={'test'}/>);
    expect(element.text())
      .toEqual('Hello, I am a function component with the name property "test"');
  });
});

describe('Class Component', () => {
  it('can be configured via properties', () => {
    const element = shallow(<MyStatelessClassComponent name={'test'}/>);
    expect(element.text())
      .toEqual('Hello, I am a class component with the name property "test"');
  });

  it('can have local state', () => {
    const element = shallow(<MyStatefulClassComponent/>);
    expect(element.text()).toEqual('OFF');

    element.find('button').simulate('click');
    expect(element.text()).toEqual('ON');
  });
});

describe('Component Composition', () => {
  it('is possible to compose components', () => {
    const element = shallow(<MyComposingComponent/>);
    expect(element.find(MyFunctionComponent)).toHaveLength(1);
    expect(element.find(MyStatelessClassComponent)).toHaveLength(1);
  });
});