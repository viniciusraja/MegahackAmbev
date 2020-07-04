import {
  FETCH_USER_INFO_PENDING,
  FETCH_USER_INFO_ERROR,
  FETCH_USER_INFO_SUCCESS,
} from './types';
import api from 'services/api'

   export function fetchUserInfoPending() {
      return {
        type: FETCH_USER_INFO_PENDING,
      };
    }
   export function fetchUserInfoError(error) {
      return {
        type: FETCH_USER_INFO_ERROR,
        payload: error,
      };
    }
   export function fetchUserInfoSuccess(data) {
      return {
        type: FETCH_USER_INFO_SUCCESS,
        payload: data,
      };
    }

   export default function fetchUserInfo(req){
   return (dispatch) => {
      dispatch(fetchUserInfoPending())
      api
      .get(req)
      .then((res) => {
        dispatch(
          fetchUserInfoSuccess({id:res.data.object.id,name:res.data.object.name,image:res.data.object.image, points:res.data.object.points})
        );
      })
        .catch((error) => {
          dispatch(fetchUserInfoError(error));
        })
}
}