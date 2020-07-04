
import {SHOW_LOGIN_COMPONENT, SHOW_HINT_CONTAINER, SHOW_ADMIN_PRODUCT_CONFIG_CONTAINER, SHOW_ADMIN_CATEGORY_CONFIG_CONTAINER} from '../actions/types'

const initialState = {
  loginContainer: false,
  hintContainer: false,
  adminProductConfigContainer:{
    show:false,
    props:{editingProduct:false}
},
  adminCategoryConfigContainer:{
    show:false,
    props:{}
}
};

const showComponent = (state = initialState, action) => {
    switch (action.type) {
          
    case SHOW_LOGIN_COMPONENT: 
      return {
          ...state,
              loginContainer:!state.loginContainer,
        };
    case SHOW_HINT_CONTAINER: 
      return {
          ...state,
              hintContainer:!state.hintContainer,
        };
        
        case SHOW_ADMIN_PRODUCT_CONFIG_CONTAINER: 
          return {
              ...state,
              adminProductConfigContainer:{
                show:!state.adminProductConfigContainer.show,
                props:{
                  ...action.payload}
            }
          }
        case SHOW_ADMIN_CATEGORY_CONFIG_CONTAINER: 
          return {
              ...state,
              adminCategoryConfigContainer:{
                show:!state.adminCategoryConfigContainer.show,
                props:{
                  ...action.payload}
            }
          }
          
    default:
      return state;
  }
};

export default showComponent;
