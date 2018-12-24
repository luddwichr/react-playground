import {createStandardAction} from 'typesafe-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createStandardAction(INCREASE)<void>();
export const decrease = createStandardAction(DECREASE)<void>();
