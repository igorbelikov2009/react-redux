import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";

const defaultState = {
  cash: 5,
}; // state.cash

// let action = { type: "", payload: "?" }; // action - это объект с типом и какими-то данными
// Соответственно, эти данные с экшена, мы можем вытащить: action.type,

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    // в зависимости от типа action.type отрабатывает тот или иной кейс
    case "ADD_CASH":
      // изначально, состояние в редаксе является неизменяемым
      // то есть, мы каждый раз должны возвращать новый объект.
      // Поэтому, мы создаём новый объект, разворачиваем в него старое состояние ...state,
      // и изменяем какое-то конкретное поле, в данном случае меняем cash: state.cash + action
      // Получаем текущее состояние state.cash и прибавляем к нему то, что нам прилетело в action
      return { ...state, cash: state.cash + action.payload };

    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};

const store = createStore(reducer);

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
