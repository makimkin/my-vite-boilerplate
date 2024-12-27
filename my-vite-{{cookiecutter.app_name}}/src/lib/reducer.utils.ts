import { UnknownAction } from "redux-saga";

import {
  type TMatchable,
  type TAction,
  type TActionAndPayload,
  //
  type TState,
  type TAddElementProps,
  type TMergeElementsProps,
} from "🔩/redux.types";

// #endregion --------------------------------------------------------------------------------------
// #region REDUCER UTILITY
// #endregion --------------------------------------------------------------------------------------
// #region MATCHER
// -----------------------------------------------------------------------------------------------*/

/**
 * Transforms an ActionCreator to MatchableActionCreator
 * @param actionCreator
 */
function withMatcher<AC extends () => UnknownAction & { type: string }>(
  actionCreator: AC
): TMatchable<AC>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withMatcher<AC extends (...args: any[]) => UnknownAction & { type: string }>(
  actionCreator: AC
): TMatchable<AC>;

/**
 * Assigns two values: "type" and "match" to the ActionCreator in order to satisfy the Matchable type.
 * @param actionCreator
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function withMatcher(actionCreator: Function) {
  // eslint-disable-next-line
  const type = actionCreator().type;

  return Object.assign(actionCreator, {
    type,
    match(action: UnknownAction) {
      return action.type === type;
    },
  });
}

// #endregion --------------------------------------------------------------------------------------
// #region ACTION CREATORS
// -----------------------------------------------------------------------------------------------*/
function createAction<T extends string, P>(type: T, payload: P): TActionAndPayload<T, P>;

function createAction<T extends string>(type: T, payload: void): TAction<T>;

function createAction<T extends string, P>(type: T, payload: P) {
  return {
    type,
    payload,
  };
}

// #endregion --------------------------------------------------------------------------------------
// #region STATE
// -----------------------------------------------------------------------------------------------*/
const INITIAL_STATE: TState = {
  isLoading: false,
  error: null,
};

// #endregion --------------------------------------------------------------------------------------
// #region ELEMENTS
// -----------------------------------------------------------------------------------------------*/
const mergeElements = <T extends {}>({ key, current, incoming }: TMergeElementsProps<T>): T[] => {
  const ids = incoming.map((e) => e[key]);

  return [...current.filter((e) => !ids.includes(e[key])), ...incoming];
};

const addElement = <T extends {}>({ key, current, incoming }: TAddElementProps<T>): T[] => {
  if (incoming === undefined || incoming === null) return current;

  return mergeElements({ current, incoming: [incoming], key });
};

// #endregion --------------------------------------------------------------------------------------

export { INITIAL_STATE, createAction, withMatcher, mergeElements, addElement };
