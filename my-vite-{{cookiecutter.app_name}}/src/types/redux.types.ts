// #endregion --------------------------------------------------------------------------------------
// #region REDUX TYPES
// -----------------------------------------------------------------------------------------------*/
import { UnknownAction } from "redux";

import { rootReducer } from "../store/root.reducer";
// #endregion --------------------------------------------------------------------------------------
// #region STATE
// -----------------------------------------------------------------------------------------------*/
type TRootState = ReturnType<typeof rootReducer>;

type TState = {
  isLoading: boolean;
  error: Error | null;
};
// #endregion --------------------------------------------------------------------------------------
// #region ACTIONS
// -----------------------------------------------------------------------------------------------*/
type TActionAndPayload<T, P> = {
  type: T;
  payload: P;
};

type TAction<T> = {
  type: T;
};
// #endregion --------------------------------------------------------------------------------------
// #region MATCHABLE
// -----------------------------------------------------------------------------------------------*/
type TMatchable<AC extends () => UnknownAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: UnknownAction): action is ReturnType<AC>;
};
// #endregion --------------------------------------------------------------------------------------
// #region MERGERS
// -----------------------------------------------------------------------------------------------*/
type TMergeElementsProps<T> = {
  key: keyof T;
  current: T[];
  incoming: T[];
};

type TAddElementProps<T> = {
  key: keyof T;
  current: T[];
  incoming: T | null | undefined;
};
// #endregion --------------------------------------------------------------------------------------
export {
  type TState,
  type TAction,
  type TMatchable,
  type TRootState,
  type TActionAndPayload,
  //
  type TAddElementProps,
  type TMergeElementsProps,
};
