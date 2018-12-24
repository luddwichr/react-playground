import reducer from './reducer';
import * as actions from './actions';

const initialState = reducer(undefined, {} as any);

describe('Counter feature', () => {
  describe('Initial state', () => {
    it('should start with a count of zero', () => {
      expect(initialState.count).toEqual(0);
    });
  });

  describe('Increase counter', () => {
    it('should set the count to 1', () => {
      const state = reducer(initialState, actions.increase());
      expect(state.count).toEqual(1);
    });
  });

  describe('Decrease counter', () => {
    it('should set the count to -1', () => {
      const state = reducer(initialState, actions.decrease());
      expect(state.count).toEqual(-1);
    });
  });
});