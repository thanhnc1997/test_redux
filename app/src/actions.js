import { TOGGLE_OPTION, LOAD_INITIAL_STATE } from './action_type';

export const toggleOption = id => ({
  type: TOGGLE_OPTION,
  payload: id
});

export const loadInitialState = () => ({
  type: LOAD_INITIAL_STATE
})