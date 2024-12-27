import { all, call, put, takeLatest } from "typed-redux-saga";

import * as AuthActions from "./auth.actions";
import * as AuthAPI from "@/api/auth.api";

import { apiCall } from "📖/saga.utils";
// #endregion --------------------------------------------------------------------------------------
// #region AUTH SAGA
// -----------------------------------------------------------------------------------------------*/
function* authSaga() {
  yield* all([call(onAuthSignInStart), call(onAuthLogOutStart)]);
}

// #endregion --------------------------------------------------------------------------------------
// #region SIGN IN
// -----------------------------------------------------------------------------------------------*/
function* onAuthSignInStart() {
  yield* takeLatest(AuthActions.AUTH_ACTION_TYPES.AUTH_SIGN_IN_START, authSignIn);
}

function* authSignIn({ payload }: AuthActions.TAuthSignInStart) {
  yield* apiCall(
    AuthAPI.authSignIn,
    AuthActions.authSignInSuccess,
    AuthActions.authSignInFailed,
    payload
  );
}

// #endregion --------------------------------------------------------------------------------------
// #region LOG OUT
// -----------------------------------------------------------------------------------------------*/
function* onAuthLogOutStart() {
  yield* takeLatest(AuthActions.AUTH_ACTION_TYPES.AUTH_LOG_OUT_START, authLogOut);
}

function* authLogOut() {
  try {
    yield* put(AuthActions.authLogOutSuccess());
  } catch (error) {
    yield* put(AuthActions.authLogOutFailed(error as Error));
  }
}

// #endregion --------------------------------------------------------------------------------------
export { authSaga };
