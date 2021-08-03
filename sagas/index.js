import { takeLatest, all, call } from "redux-saga/effects";

/* ------------- Types ------------- */
import { TestTypes } from "../reduxs/Test";
import { SigninTypes } from "../reduxs/Signin";
import { ContestTypes } from "../reduxs/Contest";

/* ------------- Sagas ------------- */
import { test } from "./Test";
import { signin, signout, signup } from "./Signin";
import {
  closeLoadingSaga,
  openAlertSaga,
  openLoadingSaga,
} from "../constants/utils";
import { UserTypes } from "../reduxs/User";
import {
  changePassword,
  forgotPassword,
  getUserInfor,
  getUserInforById,
  resetPassword,
  updateUserInfor,
} from "./User";
import {
  answerContest,
  getContest,
  joinContest,
  registerContest,
  getContestResult,
  unRegisterContest,
  getHistoryContest,
  getRankingContest,
} from "./Contest";

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest(TestTypes.TEST_REQUEST, test),
    takeLatest(SigninTypes.SIGNIN_REQUEST, wrapSaga, signin),
    takeLatest(SigninTypes.SIGNUP_REQUEST, wrapSaga, signup),
    takeLatest(SigninTypes.SIGNOUT_REQUEST, wrapSaga, signout),
    ///////////////////User////////////////////////////
    takeLatest(UserTypes.GET_USER_INFOR_REQUEST, wrapSaga, getUserInfor),
    takeLatest(UserTypes.UPDATE_USER_INFOR_REQUEST, wrapSaga, updateUserInfor),
    takeLatest(
      UserTypes.GET_USER_INFOR_BY_ID_REQUEST,
      wrapSaga,
      getUserInforById
    ),
    takeLatest(UserTypes.CHANGE_PASSWORD_REQUEST, wrapSaga, changePassword),
    takeLatest(UserTypes.FORGOT_PASSWORD_REQUEST, wrapSaga, forgotPassword),
    takeLatest(UserTypes.RESET_PASSWORD_REQUEST, wrapSaga, resetPassword),
    ///////////////////Contest/////////////////////////
    takeLatest(ContestTypes.GET_CONTEST_REQUEST, getContest),
    takeLatest(
      ContestTypes.GET_CONTEST_RESULT_REQUEST,
      wrapSaga,
      getContestResult
    ),
    takeLatest(ContestTypes.GET_HISTORY_CONTEST_REQUEST, getHistoryContest),
    takeLatest(
      ContestTypes.REGISTER_CONTEST_REQUEST,
      wrapSaga,
      registerContest
    ),
    takeLatest(
      ContestTypes.UN_REGISTER_CONTEST_REQUEST,
      wrapSaga,
      unRegisterContest
    ),
    takeLatest(ContestTypes.JOIN_CONTEST_REQUEST, wrapSaga, joinContest),
    takeLatest(ContestTypes.ANSWER_CONTEST_REQUEST, answerContest),
    takeLatest(ContestTypes.GET_RANKING_CONTEST_REQUEST, getRankingContest),
  ]);
}

function* wrapSaga(saga, action) {
  try {
    yield all(openLoadingSaga());
    yield call(saga, action);
  } catch (err) {
    yield all(openAlertSaga(String(err)));
  } finally {
    yield all(closeLoadingSaga());
  }
}
