import { SHOW_LOGIN_COMPONENT, SHOW_HINT_CONTAINER } from '../actions/types';

const initialState = {
  loginContainer: false,
  hintContainer: false,
};

const showComponent = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOGIN_COMPONENT:
      return {
        ...state,
        loginContainer: !state.loginContainer,
      };
    case SHOW_HINT_CONTAINER:
      return {
        ...state,
        hintContainer: !state.hintContainer,
      };

    default:
      return state;
  }
};

export default showComponent;
