import { UnknownAction } from "redux";

import * as AuthActions from "./auth.actions";

import { INITIAL_STATE } from "📖/reducer.utils";

import { type TAuth } from "🔩/auth.types";
import { type TState } from "🔩/redux.types";
// #endregion --------------------------------------------------------------------------------------
// #region AUTH REDUCER
// -----------------------------------------------------------------------------------------------*/
type TAuthState = {
  auth: TAuth | null;
  //
  signInError: Error | null;
  signInIsLoading: boolean;
} & TState;

const AUTH_INITIAL_STATE: TAuthState = {
  auth: null,
  //
  signInError: null,
  signInIsLoading: false,
  ...INITIAL_STATE,
};

const authReducer = (state = AUTH_INITIAL_STATE, action = {} as UnknownAction): TAuthState => {
  // #endregion ------------------------------------------------------------------------------------
  // #region SIGN IN
  // ---------------------------------------------------------------------------------------------*/
  if (AuthActions.authSignInStart.match(action)) {
    return {
      ...state,
      signInIsLoading: true,
      signInError: null,
    };
  }

  if (AuthActions.authSignInSuccess.match(action)) {
    return {
      ...state,
      signInIsLoading: false,
      auth: action.payload,
    };
  }

  if (AuthActions.authSignInFailed.match(action)) {
    return {
      ...state,
      signInIsLoading: false,
      signInError: action.payload,
    };
  }

  // #endregion ------------------------------------------------------------------------------------
  // #region LOG OUT
  // ---------------------------------------------------------------------------------------------*/
  if (AuthActions.authLogOutStart.match(action)) {
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  }

  if (AuthActions.authLogOutSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      auth: null,
    };
  }

  if (AuthActions.authLogOutFailed.match(action)) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }

  return state;
};

// #endregion --------------------------------------------------------------------------------------
export { type TAuthState, authReducer };
