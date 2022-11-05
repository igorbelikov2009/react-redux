import { addManyCustomersAction } from "../store/customerReducer";

export const fetchCustomers = () => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      //   .then((json) => console.log(json));
      .then((json) => dispatch(addManyCustomersAction(json)));
  };
};

// Если кратко подитожить, redux-thunk - это Middleware, который позволяет внутри каких-то
// сторонних функций использовать dispatch. Он внутри себя опрокидывает в эту функцию
// параметром dispatch, и мы можем им пользоваться.
