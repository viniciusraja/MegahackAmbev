import { createStore, combineReducers, applyMiddleware} from 'redux';
import showComponent from '../reducers/showComponentReducer';
import getProductsList from '../reducers/productsListReducer';
import getGoals from '../reducers/goalsReducer';
import getUserInfo from '../reducers/userInfoReducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  getUserInfo,
  getProductsList,
  showComponent,
  getGoals,
});

const configureStore = () =>
  createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
