// src/redux/reducers.js
import { combineReducers } from "redux";
import productsReducer from "./slices/productsSlice";
import userReducer from "./slices/userSlice";
import allUsersReducer from "./slices/allUsersSlice";
import inCartReducer from "./slices/CartSlice";
import detailReducer from "./slices/detailSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const userPersistConfig = {
  key: "user",
  storage: storage,
};

const rootReducer = combineReducers({
  products: productsReducer,
  allUsers: allUsersReducer,
  user: persistReducer(userPersistConfig, userReducer),
  inCart: inCartReducer,
  detail: detailReducer,
});

export default rootReducer;
