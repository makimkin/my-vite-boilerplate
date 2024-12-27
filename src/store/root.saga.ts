import { all, call } from "typed-redux-saga";

import { authSaga } from "./auth/auth.saga";
// #endregion --------------------------------------------------------------------------------------
// #region ROOT SAGA
// -----------------------------------------------------------------------------------------------*/
function* rootSaga() {
  yield* all([
    call(authSaga),
    //
  ]);
}
// #endregion --------------------------------------------------------------------------------------
export { rootSaga };
