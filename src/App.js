import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";
import { fetchCustomers } from "./asyncAction/customers";

function App() {
  const dispatch = useDispatch();
  // Параметром принимает функцию, а эта функция, в свою очередь, принимает состояние state и
  // из этого состояния мы получаем нужную переменную state.cash, в данном случае это cash.
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  // console.log(cash, customers, customers.length);

  const addCash = (cash) => {
    // dispatch({ type: "ADD_CASH", payload: 1 });
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    // dispatch({ type: "GET_CASH", payload: 1 });
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    // dispatch({ type: "ADD_CASTOMER", payload: customer });
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    // dispatch({ type: "REMOVE_CASTOMER", payload: customer.id });
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <div style={{ fontSize: "4rem", marginRight: "1rem" }}>Баланс {cash}</div>

      <div style={{ display: "flex", margin: "3rem auto" }}>
        <button onClick={() => addCash(Number(prompt()))} style={{ marginRight: "1rem" }}>
          Пополнить счёт
        </button>

        <button onClick={() => getCash(Number(prompt()))} style={{ marginRight: "1rem" }}>
          Снять со счёта
        </button>

        <button onClick={() => addCustomer(prompt())} style={{ marginRight: "1rem" }}>
          Добавить клиента
        </button>

        <button onClick={() => dispatch(fetchCustomers())} style={{ marginRight: "1rem" }}>
          Получить клиента из базы
        </button>
      </div>
      {/* Далее делаем проверку, если массив не пустой, будем его отрисовывать */}

      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              onClick={() => removeCustomer(customer)}
              key={customer.id}
              style={{
                width: "100%",
                maxWidth: "30%",
                fontSize: "1.5rem",
                border: "1px solid black",
                padding: "10px 20px",
                margin: "10px auto",
              }}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "2rem", marginTop: 20 }}>Клиенты отсутствуют</div>
      )}
    </div>
  );
}

export default App;
