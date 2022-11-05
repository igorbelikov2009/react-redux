// let action = { type: "", payload: "?" }; // action - это объект с типом и какими-то данными
// Соответственно, эти данные с экшена, мы можем вытащить: action.type,

const defaultState = {
  cash: 5,
};

// Экшены, которые мы передаём в dispatch, являются однотипными объектами, с типом и
// какими-то данными. Тип - это какое-то строковое значение, и при написании таким вот способом
// можем ошибиться, и вызвать не тот экшен. Хорошая практика - константы

const ADD_CASH = "ADD_CASH";
const GET_CASH = "GET_CASH";
export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    // в зависимости от типа action.type отрабатывает тот или иной кейс
    case ADD_CASH:
      // изначально, состояние в редаксе является неизменяемым
      // то есть, мы каждый раз должны возвращать новый объект.
      // Поэтому, мы создаём новый объект, разворачиваем в него старое состояние ...state,
      // и изменяем какое-то конкретное поле, в данном случае меняем cash: state.cash + action
      // Получаем текущее состояние state.cash и прибавляем к нему то, что нам прилетело в action
      return { ...state, cash: state.cash + action.payload };

    case GET_CASH:
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};
