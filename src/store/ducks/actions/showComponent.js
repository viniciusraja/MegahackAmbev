import {SHOW_LOGIN_COMPONENT, SHOW_HINT_CONTAINER,SHOW_ADMIN_PRODUCT_CONFIG_CONTAINER, SHOW_ADMIN_CATEGORY_CONFIG_CONTAINER} from './types'

export function showLoginComponent() {
    return {
      type: SHOW_LOGIN_COMPONENT,
    };
  }

export function showHintComponent() {
    return {
      type: SHOW_HINT_CONTAINER,
    };
  }
  
export function showAdminProductConfigComponent(props) {
    return {
      type: SHOW_ADMIN_PRODUCT_CONFIG_CONTAINER,
      payload:props
    };
  }
  
  export function showAdminCategoryConfigComponent(props) {
      return {
        type: SHOW_ADMIN_CATEGORY_CONFIG_CONTAINER,
        payload:props
      };
    }
