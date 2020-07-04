import { SHOW_LOGIN_COMPONENT, SHOW_HINT_CONTAINER } from './types';

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
