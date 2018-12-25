import {StateType} from 'typesafe-actions';
import {combineReducers} from 'redux';
import {counterReducer} from '../components/reduxCounter';
import {webRequestReducer} from '../components/webRequest';

const rootReducer = combineReducers({
  counter: counterReducer,
  webRequest: webRequestReducer
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;