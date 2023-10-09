import { combineReducers } from "redux";
import userReducer from "./slices/userSlice";
import productsReducer from "./slices/productsSlice";
import detailReducer from "./slices/detailSlice";
import filterReducer from "./slices/filterSlice"
import inCartReducer from "./slices/inCartSlice"
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
  detail: detailReducer,
  user: persistReducer(userPersistConfig, userReducer),
});

export { rootReducer };
