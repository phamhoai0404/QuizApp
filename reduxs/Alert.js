import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  UpdateVisibleAlert: ["visible"],
  UpdateTitleAlert: ["title"],
  UpdateBodyAlert: ["body"],
  UpdateTxtokAlert: ["txtOk"],
  UpdateOnpressokAlert: ["onPressOk"],
});

export const AlertTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  visible: false,
  title: "Thông báo",
  body: "",
  txtOk: "Ok",
  onPressOk: null,
});

export const updateVisibleAlert = (state, { visible }) =>
  state.merge({ visible });

export const updateTitleAlert = (state, { tỉtle }) => state.merge({ tỉtle });

export const updateBodyAlert = (state, { body }) => state.merge({ body });

export const updateTxtokAlert = (state, { txtOk }) => state.merge({ txtOk });

export const updateOnpressokAlert = (state, { onPressOk }) =>
  state.merge({ onPressOk });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_VISIBLE_ALERT]: updateVisibleAlert,
  [Types.UPDATE_TITLE_ALERT]: updateTitleAlert,
  [Types.UPDATE_BODY_ALERT]: updateBodyAlert,
  [Types.UPDATE_TXTOK_ALERT]: updateTxtokAlert,
  [Types.UPDATE_ONPRESSOK_ALERT]: updateOnpressokAlert,
});
