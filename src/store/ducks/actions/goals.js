import {
  FETCH_GOALS_PENDING,
  FETCH_GOALS_ERROR,
  FETCH_GOALS_SUCCESS,
} from './types';
import api from 'services/api';

function fetchGoalsPending() {
  return {
    type: FETCH_GOALS_PENDING,
  };
}
function fetchGoalsError(error) {
  return {
    type: FETCH_GOALS_ERROR,
    payload: error,
  };
}
function fetchGoalsSuccess(data) {
  return {
    type: FETCH_GOALS_SUCCESS,
    payload: data,
  };
}
function fetchGoals(req) {
  return (dispatch) => {
    dispatch(fetchGoalsPending());
    api
      .get(req)
      .then((res) => {
        dispatch(fetchGoalsSuccess(res.data.object));
      })
      .catch((error) => {
        dispatch(fetchGoalsError(error));
      });
  };
}
export default fetchGoals;
