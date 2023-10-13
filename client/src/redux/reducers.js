// src/redux/reducers.js
import { combineReducers } from "redux";
import productsReducer from "./slices/productsSlice";
import userReducer from "./slices/userSlice";
import allUsersReducer from "./slices/allUsersSlice";
import detailReducer from "./slices/detailSlice";
import filterReducer from "./slices/filterSlice"
import myOrdersReducer from "./slices/myOrdersSlice"
import orderDetailReducer from "./slices/orderDetailSlice"
import cartReducer from "./slices/cartSlice"
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import wishlistReducer from "./slices/WishlistSlice";


const userPersistConfig = {
  key: "user",
  storage: storage,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  orderDetail: orderDetailReducer,
  myOrders: myOrdersReducer,
  wishlist: wishlistReducer,
  filter: filterReducer,
  cart:cartReducer,
  detail: detailReducer,
  products: productsReducer,
  allUsers: allUsersReducer,
});

export default rootReducer;
