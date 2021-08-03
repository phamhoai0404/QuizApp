import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  GetContestRequest: ["page", "success"],
  GetContestResultRequest: ["contestId", "success"],
  RegisterContestRequest: ["contestId", "success"],
  UnRegisterContestRequest: ["contestId", "success"],
  JoinContestRequest: ["contestId", "success"],
  AnswerContestRequest: [
    "contestId",
    "questionIndex",
    "answer",
    "timeAnswer",
    "success",
  ],
  GetHistoryContestRequest: ["page", "success"],
  GetRankingContestRequest: ["contestId", "userName", "success"],
});

export const ContestTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: null,
});

// export const signinSuccess = (state, { data }) => state.merge({ data });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_CONTEST_REQUEST]: null,
  [Types.GET_CONTEST_RESULT_REQUEST]: null,
  [Types.REGISTER_CONTEST_REQUEST]: null,
  [Types.UN_REGISTER_CONTEST_REQUEST]: null,
  [Types.JOIN_CONTEST_REQUEST]: null,
  [Types.ANSWER_CONTEST_REQUEST]: null,
  [Types.GET_HISTORY_CONTEST_REQUEST]: null,
  [Types.GET_RANKING_CONTEST_REQUEST]: null,
});
