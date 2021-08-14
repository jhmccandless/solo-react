import { createStore } from "redux";
import blog_reducer from "./reducer";

const store = createStore(blog_reducer);

export default store;
