import { createStore, combineReducers } from "redux";
import { addToCart, addToFavourites } from "./reducers/productsReducer";

const reducers = combineReducers(
  {
    basket: addToCart,
    favourites: addToFavourites
  }
);
export type RootState = ReturnType<typeof reducers>

const store = createStore(reducers);

export default store;
