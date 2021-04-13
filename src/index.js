import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = [
  { id: 0, type: "SALE", value: 3.99 },
  { id: 1, type: "REFUND", value: -1.99 },
  { id: 2, type: "SALE", value: 17.49 },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BEGINNING":
      return [action.payload, ...state];
    case "ADD_TO_END":
      return [...state, action.payload];
    case "ADD_TO_SECOND_POSITION":
      return [...state.slice(0, 1), action.payload, ...state.slice(2)];
    case "REMOVE_SECOND_ITEM":
      return state.filter((item, i) => (i === 1 ? false : true));
    case "REMOVE_ITEM_WITH_ID_1":
      return state.filter((item, i) => (item.id === 1 ? false : true));
    case "REMOVE_ITEM_CONTAINS_SALES":
      return state.filter((item, i) => (item.type === "SALE" ? false : true));
    default:
      return state;
  }
};

const store = createStore(reducer);

// Add an event to the beginning of the array.
store.dispatch({
  type: "ADD_TO_BEGINNING",
  payload: { id: -1, type: "REFUND", value: 2.99 },
});
// 2. Add an event to the end of the array.
store.dispatch({
  type: "ADD_TO_END",
  payload: { id: 3, type: "REFUND", value: 5.99 },
});
// 3. Insert an event after the first item.
store.dispatch({
  type: "ADD_TO_SECOND_POSITION",
  payload: { id: 4, type: "SALE", value: 0.99 },
});
// 4. Remove the second event from the list.
store.dispatch({
  type: "REMOVE_SECOND_ITEM",
});
// 5. Remove the event with id 1.
store.dispatch({
  type: "REMOVE_ITEM_WITH_ID_1",
});
// 6. Produce an array that only contains sales.
store.dispatch({
  type: "REMOVE_ITEM_CONTAINS_SALES",
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
