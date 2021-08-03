import axios from "axios";
import { all, put, select } from "redux-saga/effects";

import Actions from "../reduxs/Contest";

import { BASE_URL } from "../config/Config";
import { openAlertSaga, storeData } from "../constants/utils";

export function* getContest(action) {
  const state = yield select();
  try {
    const result = yield axios({
      url: `${BASE_URL}/contest`,
      method: "GET",
      headers: {
        Authorization: "Bearer " + state.signin.data?.tokens?.access?.token,
      },
      params: {
        populate: "questionListId",
        page: action.page,
      },
    });
    if (result.data) {
      action.success(result.data.results);
    }
  } catch (error) {
    if (error.response) {
      yield all(openAlertSaga(error.response.data.message));
    } else {
      yield all(openAlertSaga(error.message));
    }
  }
}

export function* getContestResult(action) {
  const state = yield select();
  try {
    const result = yield axios({
      url: `${BASE_URL}/contestResult/byUser`,
      method: "GET",
      headers: {
        Authorization: "Bearer " + state.signin.data?.tokens?.access?.token,
      },
      params: {
        contestId: action.contestId,
      },
    });
    if (result.data) {
      action.success(result.data.results);
    }
  } catch (error) {
    if (error.response) {
      yield all(openAlertSaga(error.response.data.message));
    } else {
      yield all(openAlertSaga(error.message));
    }
  }
}

export function* getHistoryContest(action) {
  const state = yield select();
  try {
    const result = yield axios({
      url: `${BASE_URL}/contestResult/byUser`,
      method: "GET",
      headers: {
        Authorization: "Bearer " + state.signin.data?.tokens?.access?.token,
      },
      params: {
        populate: "contestId,history.questionId",
        page: action.page,
      },
    });
    if (result.data) {
      action.success(result.data.results);
    }
  } catch (error) {
    if (error.response) {
      yield all(openAlertSaga(error.response.data.message));
    } else {
      yield all(openAlertSaga(error.message));
    }
  }
}

export function* getRankingContest(action) {
  const state = yield select();
  try {
    const result = yield axios({
      url: `${BASE_URL}/contestResult/rankingContest`,
      method: "GET",
      headers: {
        Authorization: "Bearer " + state.signin.data?.tokens?.access?.token,
      },
      params: {
        contestId: action.contestId,
        userName: action.userName,
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

export function* registerContest(action) {
  const state = yield select();
  try {
    const result = yield axios({
      url: `${BASE_URL}/contestResult/register`,
      method: "POST",
      headers: {
        Authorization: "Bearer " + state.signin.data?.tokens?.access?.token,
      },
      data: {
        contestId: action.contestId,
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

export function* unRegisterContest(action) {
  const state = yield select();
  try {
    const result = yield axios({
      url: `${BASE_URL}/contestResult/unRegister`,
      method: "POST",
      headers: {
        Authorization: "Bearer " + state.signin.data?.tokens?.access?.token,
      },
      data: {
        contestId: action.contestId,
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

export function* joinContest(action) {
  const state = yield select();
  try {
    const result = yield axios({
      url: `${BASE_URL}/contestResult/join`,
      method: "POST",
      headers: {
        Authorization: "Bearer " + state.signin.data?.tokens?.access?.token,
      },
      data: {
        contestId: action.contestId,
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

export function* answerContest(action) {
  const state = yield select();
  try {
    const result = yield axios({
      url: `${BASE_URL}/contestResult/answer`,
      method: "POST",
      headers: {
        Authorization: "Bearer " + state.signin.data?.tokens?.access?.token,
      },
      data: {
        contestId: action.contestId,
        questionIndex: action.questionIndex,
        answer: action.answer,
        timeAnswer: action.timeAnswer,
        success: action.success,
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
