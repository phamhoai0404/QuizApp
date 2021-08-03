import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  SigninRequest: ["studentCode", "password", "success"],
  SigninSuccess: ["data"],

  SignoutRequest: ["refreshToken", "success"],
  SignupRequest: [
    "name",
    "studentCode",
    "phone",
    "email",
    "password",
    "gender",
    "success",
  ],
});

export const SigninTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: null,
});

export const signinSuccess = (state, { data }) => state.merge({ data });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGNOUT_REQUEST]: null,
  [Types.SIGNUP_REQUEST]: null,
  [Types.SIGNIN_REQUEST]: null,
  [Types.SIGNIN_SUCCESS]: signinSuccess,
});
