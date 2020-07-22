import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import rootReducer from "./reducers/index";
import { addCharacterById } from "./action/index";

import { Provider } from "react-redux";

import { createStore } from "redux";

const store = createStore(rootReducer);
console.log(store.getState());
store.subscribe(() => console.log(store.getState()));
store.dispatch(addCharacterById(2));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
