import React, {Component} from 'react';
import {
  MyComposingComponent,
  MyFunctionComponent,
  MyStatefulClassComponent,
  MyStatelessClassComponent,
} from '../basics/basics';
import Counter from '../counter/Counter';
import ReduxCounter from '../reduxCounter/ReduxCounter';
import WebRequestDemo from '../webRequest/WebRequestDemo';

class App extends Component {
  render() {
    return (
      <div>
        <MyFunctionComponent name={'functional!'}/>
        <MyStatelessClassComponent name={'stateless class'}/>
        <MyStatefulClassComponent/>
        <MyComposingComponent/>
        <Counter/>
        <ReduxCounter/>
        <WebRequestDemo/>
      </div>
    );
  }
}

export default App;