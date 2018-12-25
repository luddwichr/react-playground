import {combineEpics} from 'redux-observable';
import {webRequestEpic} from '../components/webRequest';

export const rootEpic = combineEpics(webRequestEpic);