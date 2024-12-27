import { call, put, select } from "typed-redux-saga";
import { UnknownAction } from "redux";

import { selectAccessToken } from "📦/auth";

import { type TAPIAccessToken } from "🔩/api.types";
// #endregion --------------------------------------------------------------------------------------
// #region API CALL
// -----------------------------------------------------------------------------------------------*/
function* apiCall<T extends {}, K>(
  apiFn: (request: T) => Promise<K>,
  successAction: (response: K) => UnknownAction,
  failureAction: (error: Error) => UnknownAction,
  params: T
) {
  try {
    const response = yield* call(apiFn, params);

    yield* put(successAction(response));

    return response;
  } catch (error) {
    yield* put(failureAction(error as Error));
  }
}

// #endregion --------------------------------------------------------------------------------------
// #region PROTECTED API CALL
// -----------------------------------------------------------------------------------------------*/
function* protectedApiCall<T extends {}, K>(
  apiFn: (request: T & TAPIAccessToken) => Promise<K>,
  successAction: (response: K) => UnknownAction,
  failureAction: (error: Error) => UnknownAction,
  params: T
) {
  try {
    const accessToken = yield* select(selectAccessToken);

    if (accessToken === null) {
      throw new Error("Token is null");
    }

    const response = yield* call(apiFn, { ...params, accessToken });

    yield* put(successAction(response));

    return response;
  } catch (error) {
    yield* put(failureAction(error as Error));
  }
}

// #endregion --------------------------------------------------------------------------------------
export { apiCall, protectedApiCall };
