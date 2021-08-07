import { createStore, compose, applyMiddleware } from "redux";
import { FETCH_PAGE } from "./types";
import thunk from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const initialState = Object();

function rootReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case FETCH_PAGE:
      return {
        ...state,
        ...action.value,
      };

    default:
      return state;
  }
}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...[thunk]),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f
  )
);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export * from "./actions";
