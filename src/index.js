import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Redux
import { Provider } from "react-redux";
import { configureStore, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  // <Provider store={configureStore} >
  //   <PersistGate persistor={persistor}>
  //     <React.StrictMode>
  //       <App />
  //     </React.StrictMode>
  //   </PersistGate>
  // </Provider>,
  // document.getElementById("root")

  <React.StrictMode>
    <Provider store={configureStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
