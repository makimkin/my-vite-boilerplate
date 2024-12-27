import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import { compose } from "redux";

import createSagaMiddleware from "redux-saga";

import { configureStore, Tuple } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root.reducer";
import { rootSaga } from "./root.saga";

import { type TRootState } from "🔩/redux.types";
// #endregion --------------------------------------------------------------------------------------
// #region GLOBAL NAMESPACE EXTENSION
// -----------------------------------------------------------------------------------------------*/
declare global {
  // noinspection JSUnusedGlobalSymbols
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// #endregion --------------------------------------------------------------------------------------
// #region PERSIST CONFIG
// -----------------------------------------------------------------------------------------------*/
type TExtendedPersistConfig = PersistConfig<TRootState> & {
  whitelist?: (keyof TRootState)[];
  blacklist?: (keyof TRootState)[];
};

const persistConfig: TExtendedPersistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

// #endregion --------------------------------------------------------------------------------------
// #region SAGA
// -----------------------------------------------------------------------------------------------*/
const sagaMiddleware = createSagaMiddleware();

// #endregion --------------------------------------------------------------------------------------
// #region STORE
// -----------------------------------------------------------------------------------------------*/
const store = configureStore({
  reducer: persistedRootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: () => new Tuple(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// #endregion --------------------------------------------------------------------------------------
// #region PERSISTOR
// -----------------------------------------------------------------------------------------------*/
const persistor = persistStore(store);

// #endregion --------------------------------------------------------------------------------------
export { persistor, store };
