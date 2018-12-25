import {Epic} from 'redux-observable';
import {getType, isActionOf} from 'typesafe-actions';
import {catchError, debounceTime, filter, map, switchMap} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import * as actions from './actions';
import {RootAction} from '../../store/root-action';
import {of} from 'rxjs';

interface HelloWorldDto {
  hello: string
}

const webRequestEpic: Epic<RootAction, RootAction> = (action$) =>
  action$.pipe(
    filter(isActionOf(actions.sendRequest.request)),
    debounceTime(500),
    switchMap(() =>
      ajax.getJSON('https://www.mocky.io/v2/5185415ba171ea3a00704eed').pipe(
        map(response => actions.sendRequest.success((<HelloWorldDto>response).hello)),
        catchError(error => of({
          type: getType(actions.sendRequest.failure),
          payload: error.xhr.response,
          error: true
        }))
      )
    ),
  );

export default webRequestEpic;