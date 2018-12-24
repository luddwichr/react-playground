import React, {Component, FunctionComponent} from 'react';

export interface FunctionComponentProps {
  readonly name: string
}

export const MyFunctionComponent: FunctionComponent<FunctionComponentProps> = (props) => {
  return (
    <h3>Hello, I am a function component with the name property "{props.name}"</h3>
  );
};

export interface ClassComponentProps {
  readonly name: string
}

export class MyStatelessClassComponent extends Component<ClassComponentProps> {
  render() {
    return <h3>Hello, I am a class component with the name property "{this.props.name}"</h3>;
  }
}

export interface ClassComponentState {
  readonly isToggleOn: boolean
}

export class MyStatefulClassComponent extends Component<object, ClassComponentState> {

  constructor(props: object) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {isToggleOn: false};
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>;
  }

  private handleClick() {
    this.setState(state => ({isToggleOn: !state.isToggleOn}));
  }
}

export class MyComposingComponent extends Component {
  render() {
    return (<div>
      <h1>I am a composing element with two sub components</h1>
      <MyFunctionComponent name={'functional'}/>
      <MyStatelessClassComponent name={'class'}/>
    </div>);
  }
}
