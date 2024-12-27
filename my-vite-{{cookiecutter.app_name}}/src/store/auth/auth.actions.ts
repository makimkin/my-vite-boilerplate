import { createAction, withMatcher } from "📖/reducer.utils";

import {
  type TAuthSignInRequest,
  type TAuthSignInResponse,
  //
} from "🔩/auth.types";
import { type TActionAndPayload, type TAction } from "🔩/redux.types";
// #endregion --------------------------------------------------------------------------------------
// #region AUTH ACTIONS
// -----------------------------------------------------------------------------------------------*/
enum AUTH_ACTION_TYPES {
  AUTH_SIGN_IN_START = "auth/SIGN/IN/START",
  AUTH_SIGN_IN_SUCCESS = "auth/SIGN/IN/SUCCESS",
  AUTH_SIGN_IN_FAILED = "auth/SIGN/IN/FAILED",

  AUTH_LOG_OUT_START = "auth/LOG/OUT/START",
  AUTH_LOG_OUT_SUCCESS = "auth/LOG/OUT/SUCCESS",
  AUTH_LOG_OUT_FAILED = "auth/LOG/OUT/FAILED",
}

// #endregion --------------------------------------------------------------------------------------
// #region SIGN IN
// -----------------------------------------------------------------------------------------------*/
type TAuthSignInStart = TActionAndPayload<AUTH_ACTION_TYPES.AUTH_SIGN_IN_START, TAuthSignInRequest>;
type TAuthSignInSuccess = TActionAndPayload<
  AUTH_ACTION_TYPES.AUTH_SIGN_IN_SUCCESS,
  TAuthSignInResponse
>;
type TAuthSignInFailed = TActionAndPayload<AUTH_ACTION_TYPES.AUTH_SIGN_IN_FAILED, Error>;

const authSignInStart = withMatcher(
  (request: TAuthSignInRequest): TAuthSignInStart =>
    createAction(AUTH_ACTION_TYPES.AUTH_SIGN_IN_START, request)
);

const authSignInSuccess = withMatcher(
  (response: TAuthSignInResponse): TAuthSignInSuccess =>
    createAction(AUTH_ACTION_TYPES.AUTH_SIGN_IN_SUCCESS, response)
);

const authSignInFailed = withMatcher(
  (error: Error): TAuthSignInFailed => createAction(AUTH_ACTION_TYPES.AUTH_SIGN_IN_FAILED, error)
);

// #endregion --------------------------------------------------------------------------------------
// #region LOG OUT
// -----------------------------------------------------------------------------------------------*/
type TAuthLogOutStart = TAction<AUTH_ACTION_TYPES.AUTH_LOG_OUT_START>;
type TAuthLogOutSuccess = TAction<AUTH_ACTION_TYPES.AUTH_LOG_OUT_SUCCESS>;
type TAuthLogOutFailed = TActionAndPayload<AUTH_ACTION_TYPES.AUTH_LOG_OUT_FAILED, Error>;

const authLogOutStart = withMatcher(
  (): TAuthLogOutStart => createAction(AUTH_ACTION_TYPES.AUTH_LOG_OUT_START)
);

const authLogOutSuccess = withMatcher(
  (): TAuthLogOutSuccess => createAction(AUTH_ACTION_TYPES.AUTH_LOG_OUT_SUCCESS)
);

const authLogOutFailed = withMatcher(
  (error: Error): TAuthLogOutFailed => createAction(AUTH_ACTION_TYPES.AUTH_LOG_OUT_FAILED, error)
);
// #endregion --------------------------------------------------------------------------------------

export {
  AUTH_ACTION_TYPES,
  //
  type TAuthSignInStart,
  authSignInSuccess,
  authSignInFailed,
  authSignInStart,
  //
  type TAuthLogOutStart,
  authLogOutSuccess,
  authLogOutFailed,
  authLogOutStart,
};
