import { combineReducer } from "redux";
import postReducer from "./PostReducer";

export default combineReducer({
  post: postReducer
});
