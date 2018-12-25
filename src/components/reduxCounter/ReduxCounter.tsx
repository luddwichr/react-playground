import React, {Component} from 'react';
import './ReduxCounter.css';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {RootState} from '../../store';
import {CounterAction} from './reducer';
import * as actions from './actions';

export interface CounterProps {
  count: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export function mapStateToProps(state: RootState) {
  return {
    count: state.counter.count,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<CounterAction>) {
  return {
    onIncrement: () => dispatch(actions.increase()),
    onDecrement: () => dispatch(actions.decrease()),
  };
}

export class ReduxCounterComponent extends Component<CounterProps> {

  static defaultProps = {
    count: 0,
    onIncrement: () => {},
    onDecrement: () => {},
  };

  render() {
    return (
      <div className='ReduxCounter'>
        <span id='count'>{this.props.count}</span>
        <button id='increment' onClick={this.props.onIncrement}>+</button>
        <button id='decrement' onClick={this.props.onDecrement}>-</button>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounterComponent);