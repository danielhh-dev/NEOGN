// src/redux/reducers.js
import { combineReducers } from "redux";
import productsReducer from "./slices/productsSlice";
import userReducer from "./slices/userSlice";
import allUsersReducer from "./slices/allUsersSlice";
import detailReducer from "./slices/detailSlice";
import filterReducer from "./slices/filterSlice"
import inCartReducer from "./slices/CartSlice"
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import wishlistReducer from "./slices/WishlistSlice";


const userPersistConfig = {
  key: "user",
  storage: storage,
};

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  filter: filterReducer,
  inCart:inCartReducer,
  detail: detailReducer,
  products: productsReducer,
  allUsers: allUsersReducer,
  user: persistReducer(userPersistConfig, userReducer),
});

export default rootReducer;
