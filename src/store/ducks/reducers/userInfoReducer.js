import { FETCH_USER_INFO_PENDING, FETCH_USER_INFO_ERROR, FETCH_USER_INFO_SUCCESS} from '../actions/types'

const initialState = {
  userInfo:[],
  pending:false,
  error:false
};

const getUserInfo = (state = initialState, action) => {
    switch (action.type) {
          
    case FETCH_USER_INFO_SUCCESS: 
      return {
          ...state,
              userInfo:action.payload,
              pending:false,
              error:false
        };
    case FETCH_USER_INFO_PENDING: 
      return {
          ...state,
              pending:true
        };
    case FETCH_USER_INFO_ERROR: 
      return {
          ...state,
              error:action.payload
        };
    default:
      return state;
  }
};

export default getUserInfo;
