import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  // Параметром принимает функцию, а эта функция, в свою очередь, принимает состояние state и
  // из этого состояния мы получаем нужную переменную state.cash, в данном случае это cash.
  const cash = useSelector((state) => state.cash);
  console.log(cash);
  const addCash = (cash) => {
    // dispatch({ type: "ADD_CASH", payload: 1 });
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    // dispatch({ type: "GET_CASH", payload: 1 });
    dispatch({ type: "GET_CASH", payload: cash });
  };

  return (
    <div className="App">
      <div style={{ fontSize: "3rem", marginRight: "1rem" }}>{cash} </div>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => addCash(Number(prompt()))}
          style={{ marginRight: "1rem" }}
        >
          Пополнить счёт
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счёта
        </button>
      </div>
    </div>
  );
}

export default App;
