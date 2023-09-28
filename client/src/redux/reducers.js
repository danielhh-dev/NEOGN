import { combineReducers } from "redux";
import userReducer from "./slices/userSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productsReducer from "./slices/productsSlice";
import searchReducer from "./slices/searchSlice";

const userPersistConfig = {
  key: "user",
  storage: storage,
};

const rootReducer = combineReducers({
  products: productsReducer,
  user: persistReducer(userPersistConfig, userReducer),
  search: searchReducer,
});

export default rootReducer;
