import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { StrictMode } from "react";

import App from "./app";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/root.store";

import "./index.scss";

const prod = process.env.NODE_ENV === "production";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <title>{prod ? "VITARE" : "VITARE [DEV]"}</title>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
