import AccountCustomers from "./components/AccountCustomers";
import IncrDecrementCreators from "./components/IncrDecrementCreators";
import Main from "./components/Main";

export const CUSTOMERS_ROUTE = "/customers";
export const CREATORS_ROUTE = "/creators";
export const MAIN_ROUTE = "/";

export const navbarRoutes = [
  {
    path: CUSTOMERS_ROUTE,
    Component: AccountCustomers,
  },

  {
    path: CREATORS_ROUTE,
    Component: IncrDecrementCreators,
  },
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
];
