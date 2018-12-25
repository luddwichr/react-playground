import React, {Component} from 'react';
import './Counter.css';

export interface CounterProps {
  startCount: number;
}

interface CounterState {
  count: number;
}

export default class Counter extends Component<CounterProps, CounterState> {

  static defaultProps = {
    startCount: 0,
  };

  readonly state: CounterState = {count: this.props.startCount};

  componentWillReceiveProps({ startCount }: CounterProps) {
    if (startCount != null && startCount !== this.props.startCount) {
      this.setState({ count: startCount });
    }
  }

  render() {
    return (
      <div className='Counter'>
        <span id='count'>{this.state.count}</span>
        <button id='increment' onClick={this.handleIncreaseClick}>+</button>
        <button id='decrement' onClick={this.handleDecreaseClick}>-</button>
      </div>
    );
  }

  handleIncreaseClick = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  handleDecreaseClick = () => {
    this.setState(state => ({
      count: state.count - 1,
    }));
  };
}