import { combineReducers } from "redux";
import userReducer from "./slices/userSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productsReducer from "./slices/productsSlice";

const userPersistConfig = {
  key: "user",
  storage: storage,
};

const rootReducer = combineReducers({
  products: productsReducer,
  user: persistReducer(userPersistConfig, userReducer),
});

export default rootReducer;
