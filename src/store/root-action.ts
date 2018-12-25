import {CounterAction} from '../components/reduxCounter';
import {WebRequestAction} from '../components/webRequest';

export type RootAction = CounterAction | WebRequestAction;