import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
// import AccountCustomers from "./components/AccountCustomers";
// import IncrDecrementCreators from "./components/IncrDecrementCreators";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <AppRouter />
        {/* <AccountCustomers />
        <IncrDecrementCreators /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
