import {configureStore} from "@reduxjs/toolkit";
import authReducer from './reducers/AuthReducers';
import navStateReducer from "./reducers/NavStateReducers";
import type {Dispatch, AnyAction} from 'redux';
import {asyncDispatchMiddleware} from "./middlewares/AsyncDispatchMiddleware";
import {loggerMiddleware} from "./middlewares/LoggerMiddleware";

const store = configureStore({
  reducer: {
    navState: navStateReducer,
    auth: authReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   return [...getDefaultMiddleware(), /*asyncDispatchMiddleware,*/ loggerMiddleware];
  // }
});



export type MiddlewareStore<S, E extends AnyAction> = {
  dispatch: Dispatch<E>,
  getState(): S
}

export type Middleware<S = any, E extends AnyAction = AnyAction> =
    (store: MiddlewareStore<S, E>) =>
        (next: Dispatch<E>) =>
            (action: E) => ReturnType<Dispatch<E>>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
