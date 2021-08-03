import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  GetUserInforRequest: ["uid"],
  GetUserInforSuccess: ["data"],

  GetUserInforByIdRequest: ["uid", "success"],

  UpdateUserInforRequest: [
    "uid",
    "name",
    "phone",
    "email",
    "gender",
    "success",
  ],

  ChangePasswordRequest: ["uid", "password", "success"],
  ForgotPasswordRequest: ["email", "success"],
  ResetPasswordRequest: ["token", "password", "success"],
});

export const UserTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: null,
});

export const getUserInforSuccess = (state, { data }) => state.merge({ data });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_USER_INFOR_REQUEST]: null,
  [Types.GET_USER_INFOR_SUCCESS]: getUserInforSuccess,

  [Types.GET_USER_INFOR_BY_ID_REQUEST]: null,
  [Types.UPDATE_USER_INFOR_REQUEST]: null,

  [Types.CHANGE_PASSWORD_REQUEST]: null,
  [Types.FORGOT_PASSWORD_REQUEST]: null,
  [Types.RESET_PASSWORD_REQUEST]: null,
});
