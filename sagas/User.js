import axios from "axios";
import { all, put, select } from "redux-saga/effects";

import { BASE_URL } from "../config/Config";
import { openAlertSaga } from "../constants/utils";
import Actions from "../reduxs/User";

export function* getUserInfor(action) {
  const state = yield select();
  try {
    const result = yield axios({
      url: `${BASE_URL}/users/${action.uid}`,
      method: "GET",
      headers: {
        Authorization: "Bearer " + state.signin.data?.tokens?.access?.token,
      },
    });
    if (result.data) {
      yield put(Actions.GetUserInforSuccess(result.data));
    }
  } catch (error) {
    if (error.response) {
      yield all(openAlertSaga(error.response.data.message));
    } else {
      yield all(openAlertSaga(error.message));
    }
  }
}

export function* getUserInforById(action) {
  const state = yield select();
  try {
    const result = yield axios({
      url: `${BASE_URL}/users/${action.uid}`,
      method: "GET",
      headers: {
        Authorization: "Bearer " + state.signin.data?.tokens?.access?.token,
      },
    });
    if (result.data) {
      action.success(result.data);
    }
  } catch (error) {
    if (error.response) {
      yield all(openAlertSaga(error.response.data.message));
    } else {
      yield all(openAlertSaga(error.message));
    }
  }
}

export function* updateUserInfor(action) {
  const state = yield select();
  try {
    const result = yield axios({
      url: `${BASE_URL}/users/${action.uid}`,
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + state.signin.data?.tokens?.access?.token,
      },
      data: {
        name: action.name,
        phone: action.phone,
        email: action.email,
        gender: action.gender,
      },
    });
    if (result.data) {
      yield put(Actions.GetUserInforRequest(action.uid));
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

export function* changePassword(action) {
  const state = yield select();
  try {
    const result = yield axios({
      url: `${BASE_URL}/users/${action.uid}`,
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + state.signin.data?.tokens?.access?.token,
      },
      data: {
        password: action.password,
      },
    });
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

export function* forgotPassword(action) {
  const state = yield select();
  try {
    const result = yield axios({
      url: `${BASE_URL}/auth/forgot-password`,
      method: "POST",
      headers: {
        Authorization: "Bearer " + state.signin.data?.tokens?.access?.token,
      },
      data: {
        email: action.email,
      },
    });
    if (result) {
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

export function* resetPassword(action) {
  const state = yield select();
  try {
    const result = yield axios({
      url: `${BASE_URL}/auth/reset-password?token=${action.token}`,
      method: "POST",
      data: {
        password: action.password,
      },
    });
    if (result) {
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
