import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  UpdateVisibleLoading: ["visible"],
});

export const LoadingTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  visible: false,
});

export const updateVisibleLoading = (state, { visible }) =>
  state.merge({ visible });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_VISIBLE_LOADING]: updateVisibleLoading,
});
