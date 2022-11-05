import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Модуль react-redux нужен для того, чтобы связать реакт-компоненты с редаксом.
// Из этого модуля мы получаем компонент провайдер, в который оборачиваем наше приложение.
// И параметром провайдер принимает store
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
