import {
  FETCH_PRODUCTS_LIST_PENDING,
  FETCH_PRODUCTS_LIST_ERROR,
  FETCH_PRODUCTS_LIST_SUCCESS,
  SHOULD_UPDATE_PRODUCTS_LIST
} from './types';
import api from 'services/api'
import * as SecureStore from 'expo-secure-store';


export function updateProductListComponent() {
  return {
    type: SHOULD_UPDATE_PRODUCTS_LIST,
  };
}
 function fetchProductsListPending() {
  return {
    type: FETCH_PRODUCTS_LIST_PENDING,
  };
}
function fetchProductsListError(error) {
  return {
    type: FETCH_PRODUCTS_LIST_ERROR,
    payload: error,
  };
}
function fetchProductsListSuccess(data) {
  return {
    type: FETCH_PRODUCTS_LIST_SUCCESS,
    payload: data,
  };
}
 function fetchProductsList(req) {console.log('entrou na action produtos')
   return (dispatch) => {
      dispatch(fetchProductsListPending())
      api
      .get(req)
      .then((res) => {
        dispatch(
          fetchProductsListSuccess(res.data.object)
        );
      })
        .catch((error) => {
          dispatch(fetchProductsListError(error));
        })
}
}
export default fetchProductsList;