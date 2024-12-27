import { combineReducers } from "redux";

import { authReducer as auth } from "./auth/auth.reducer";
// #endregion --------------------------------------------------------------------------------------
// #region ROOT REDUCER
// -----------------------------------------------------------------------------------------------*/
const rootReducer = combineReducers({
  auth,
  //
});
// #endregion --------------------------------------------------------------------------------------
export { rootReducer };
