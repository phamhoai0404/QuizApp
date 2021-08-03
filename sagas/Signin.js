import axios from "axios";
import { all, put } from "redux-saga/effects";

import { BASE_URL } from "../config/Config";
import { openAlertSaga, storeData, removeStoreData } from "../constants/utils";
import Actions from "../reduxs/Signin";

export function* signin(action) {
  try {
    const result = yield axios({
      url: `${BASE_URL}/auth/login`,
      method: "POST",
      data: {
        studentCode: action.studentCode,
        password: action.password,
      },
    });
    // console.log(result.data);
    if (result.data) {
      yield put(Actions.SigninSuccess(result.data));
      storeData("token", result.data);
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

export function* signup(action) {
  try {
    const result = yield axios({
      url: `${BASE_URL}/auth/register`,
      method: "POST",
      data: {
        name: action.name,
        studentCode: action.studentCode,
        phone: action.phone,
        email: action.email,
        password: action.password,
        gender: action.gender,
      },
    });
    // console.log(result.data);
    if (result.data) {
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

export function* signout(action) {
  try {
    const result = yield axios({
      url: `${BASE_URL}/auth/logout`,
      method: "POST",
      data: {
        refreshToken: action.refreshToken,
      },
    });
    if (result) {
      removeStoreData("token");
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
