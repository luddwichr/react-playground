import React, {Component} from 'react';
import {RootState} from '../../store';
import {Dispatch} from 'redux';
import * as actions from './actions';
import {WebRequestAction} from './reducer';
import {connect} from 'react-redux';

export interface WebRequestDemoProps {
  onSendRequest?: () => void;
  response?: string;
}

export function mapStateToProps(state: RootState) {
  return {
    response: state.webRequest.response,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<WebRequestAction>) {
  return {
    onSendRequest: () => dispatch(actions.sendRequest.request()),
  };
}

class WebRequestDemo extends Component<WebRequestDemoProps> {

  render() {
    return (
      <div className='webRequest'>
        <button onClick={this.props.onSendRequest}>Send request</button>
        <p>Response: {this.props.response}</p>
      </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebRequestDemo);