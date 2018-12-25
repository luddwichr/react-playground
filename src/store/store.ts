import {applyMiddleware, createStore} from 'redux';
import rootReducer, {RootState} from './root-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from './root-epic';
import {RootAction} from './root-action';

function configureStore(initialState?: {}) {
  const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>();
  const middlewares = [epicMiddleware];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, initialState!, enhancer);
  epicMiddleware.run(rootEpic);
  return store;
}

export default configureStore();