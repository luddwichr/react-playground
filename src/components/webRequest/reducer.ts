import {ActionType, getType} from 'typesafe-actions';
import * as actions from './actions';
import {combineReducers} from 'redux';

export type WebRequestAction = ActionType<typeof actions>;

export type WebRequestState = Readonly<{
  readonly response?: string;
}>;

export default combineReducers<WebRequestState, WebRequestAction>({
  response: (state = '', action) => {
    switch (action.type) {
      case getType(actions.sendRequest.success):
        console.log(action.payload);
        return action.payload;
      default:
        return state;
    }
  },
});