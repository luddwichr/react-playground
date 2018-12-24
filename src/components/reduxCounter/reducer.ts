import {ActionType, getType} from 'typesafe-actions';
import * as actions from './actions';
import {combineReducers} from 'redux';

export type CounterAction = ActionType<typeof actions>;

export type CounterState = Readonly<{
  readonly count: number;
}>;

export default combineReducers<CounterState, CounterAction>({
  count: (state = 0, action) => {
    switch (action.type) {
      case getType(actions.increase):
        return state + 1;
      case getType(actions.decrease):
        return state - 1;
      default:
        return state;
    }
  },
});