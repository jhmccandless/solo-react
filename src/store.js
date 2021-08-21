import { createStore } from "redux";
import blog_reducer from "./reducer";

// const persistedState = localStorage.getItem("reduxState")
//   ? JSON.parse(localStorage.getItem("reduxState"))
//   : {};
// const store = createStore(blog_reducer, persistedState);

// store.subscribe(() => {
//   localStorage.setItem("reduxState", JSON.stringify(store.getState()));
// });

const store = createStore(blog_reducer);

export default store;
