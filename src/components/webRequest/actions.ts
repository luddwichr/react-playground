import {createAsyncAction} from 'typesafe-actions';

const SEND_REQUEST = 'webRequest/SEND_REQUEST';
const REQUEST_SUCCESS = 'webRequest/REQUEST_SUCCESS';
const REQUEST_FAILURE = 'webRequest/REQUEST_FAILURE';

export const sendRequest =
  createAsyncAction(SEND_REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE)<void, string, Error>();
