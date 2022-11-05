const defaultState = {
  customers: [],
};

// Экшены, которые мы передаём в dispatch, являются однотипными объектами, с типом и
// какими-то данными. Тип - это какое-то строковое значение, и при написании таким вот способом
// можем ошибиться, и вызвать не тот экшен. Хорошая практика - константы
const ADD_CASTOMER = "ADD_CASTOMER";
const ADD_MANY_CASTOMERS = "ADD_MANY_CASTOMERS";
const REMOVE_CASTOMER = "REMOVE_CASTOMER";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_CASTOMERS:
      // Возвращаем новый объект состояния, в него разворачиваем старое состояние, в котором будем изменять
      // массив customers. Массиву customers будем присваивать новый массив, в который мы сначала разворачиваем
      // тот массив, который уже есть, а затем разворачиваем тот массив, который нам прилетит от сервера
      return { ...state, customers: [...state.customers, ...action.payload] };

    case ADD_CASTOMER:
      // возвращаем новый объект, в который разворачиваем старое состояние и, поскольку
      // это операция добавления пользователя, мы присваиваем customerам (покупателям) новый массив,
      // в который разворачиваем уже существующий массив ...state.customers и к нему, в конец, добавляем объект,
      // который будем передавать через экшен - action.payload
      return { ...state, customers: [...state.customers, action.payload] };

    case REMOVE_CASTOMER:
      // в массив попадают только те объекты, для которых функция-колбэк возращает true
      // в нашем случае проверяем: если id клиента равняется тому id, который мы будем передавать, как payload,
      // то тогда элемент не попадёт в новый массив

      return { ...state, customers: state.customers.filter((customer) => customer.id !== action.payload) };

    default:
      return state;
  }
};

export const addManyCustomersAction = (payload) => ({ type: ADD_MANY_CASTOMERS, payload });
export const addCustomerAction = (payload) => ({ type: ADD_CASTOMER, payload });
export const removeCustomerAction = (payload) => ({ type: REMOVE_CASTOMER, payload });
