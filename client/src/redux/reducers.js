import { combineReducers } from "redux";
import userReducer from "./slices/userSlice";
import productsReducer from "./slices/productsSlice";
import detailReducer from "./slices/getByIdSlice"
import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist';

const userPersistConfig = {
  key: 'user',
  storage: storage,
};

const rootReducer = combineReducers({
  detail:detailReducer,
  products: productsReducer,
  user: persistReducer(userPersistConfig, userReducer),
});

export {rootReducer};
