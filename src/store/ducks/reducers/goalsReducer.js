import {
  FETCH_GOALS_PENDING,
  FETCH_GOALS_ERROR,
  FETCH_GOALS_SUCCESS,
} from 'store/ducks/actions/types';
const initialState = {
  pending:false,
  error:null,
  goals: [],
  shouldUpdateList:false
};

const getGoals = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOALS_SUCCESS:
      return { 
        ...state,
        pending:false,
        goals:[
          ...action.payload
        ],
      };
      case FETCH_GOALS_PENDING:
        return {
          ...state,
          pending:true,
        };
        case FETCH_GOALS_ERROR:
          return {
            ...state,
            
            pending:false,
            error:action.payload
          };
    default:
      return state;
  }
};

export default getGoals;
