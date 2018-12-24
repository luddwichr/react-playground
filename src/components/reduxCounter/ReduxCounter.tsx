import React, {Component} from 'react';
import './ReduxCounter.css';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {RootState} from '../../store';
import {CounterAction} from './reducer';
import * as actions from './actions';

export interface CounterProps {
  count?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

interface DefaultProps {
  count: number;
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

class ReduxCounter extends Component<CounterProps & DefaultProps> {

  static defaultProps: DefaultProps = {
    count: 0,
  };

  render() {
    return (
      <div className='Counter'>
        <span id='count'>{this.props.count}</span>
        <button id='increase' onClick={this.props.onIncrement}>+</button>
        <button id='decrease' onClick={this.props.onDecrement}>-</button>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);