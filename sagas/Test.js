import axios from "axios";
import { all, put, select } from "redux-saga/effects";

import { BASE_URL } from "../config/Config";
import { openAlertSaga, storeData, removeStoreData } from "../constants/utils";
import Actions from "../reduxs/Signin";

export function* test(action) {
  const state = yield select();

  try {
    const result = yield axios({
      url: `${BASE_URL}/auth/login`,
      method: "POST",
      headers: {
        Authorization: "Bearer " + state.signin.data?.tokens?.access?.token,
      },
      data: {
        studentCode: action.studentCode,
        password: action.password,
      },
    });
    // console.log(result.data);
    if (result.data) {
      yield put(Actions.SigninSuccess(result.data));
      storeData("token", result.data.tokens);
      action.success();
    }
  } catch (error) {
    if (error.response) {
      yield all(openAlertSaga(error.response.data.message));
    } else {
      yield all(openAlertSaga(error.message));
    }
  }
}
