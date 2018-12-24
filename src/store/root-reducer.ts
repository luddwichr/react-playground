import {StateType} from 'typesafe-actions';
import {combineReducers} from 'redux';
import {counterReducer} from '../components/reduxCounter';

const rootReducer = combineReducers({
  counter: counterReducer
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;