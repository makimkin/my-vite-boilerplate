import { createSelector } from "reselect";

import { type TAuthState } from "./auth.reducer";
import { type TRootState } from "🔩/redux.types";
// #endregion --------------------------------------------------------------------------------------
// #region AUTH SELECTORS
// -----------------------------------------------------------------------------------------------*/
const selectAuthReducer = (state: TRootState): TAuthState => state.auth;

const selectAuthIsLoading = createSelector(
  [selectAuthReducer],
  (authReducer) => authReducer.isLoading
);

const selectAuthError = createSelector([selectAuthReducer], (authReducer) => authReducer.error);

const selectAuth = createSelector([selectAuthReducer], (authReducer) => authReducer.auth);

// #endregion --------------------------------------------------------------------------------------
// #region TOKEN
// -----------------------------------------------------------------------------------------------*/
const selectAccessToken = createSelector([selectAuth], (auth) =>
  auth === null ? null : auth.accessToken
);

// #endregion --------------------------------------------------------------------------------------
// #region SIGN IN
// -----------------------------------------------------------------------------------------------*/
const selectAuthSignInIsLoading = createSelector(
  [selectAuthReducer],
  (authReducer) => authReducer.signInIsLoading
);

const selectAuthSignInError = createSelector(
  [selectAuthReducer],
  (authReducer) => authReducer.signInError
);

// #endregion --------------------------------------------------------------------------------------
export {
  selectAuth,
  selectAuthError,
  selectAuthIsLoading,
  //
  selectAccessToken,
  //
  selectAuthSignInError,
  selectAuthSignInIsLoading,
};
