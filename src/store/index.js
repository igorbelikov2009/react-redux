import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; // Подключение redux-thunk
import thunk from "redux-thunk"; // Подключение redux-thunk
import { cashReducer } from "./cashReducer";
import { countReducer } from "./countReducer";
import { customerReducer } from "./customerReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
  users: userReducer,
  count: countReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// Подключение redux-thunk -  composeWithDevTools(applyMiddleware(thunk))

// Если кратко подитожить, redux-thunk - это Middleware, который позволяет внутри каких-то
// сторонних функций использовать dispatch. Он внутри себя опрокидывает в эту функцию
// параметром dispatch, и мы можем им пользоваться.
