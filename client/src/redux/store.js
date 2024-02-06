import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { taskReducer } from "./taskSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

// const rootReducer = combineReducers({
//   todo: taskReducer,
// });

// //Persist Will Add Data to local storage so on refresh the data will not be lost.
// const persistConfig = {
//   key: "root",
//   storage,
//   version: 1,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);


// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ serializableCheck: false }),
// });

// export const persistor = persistStore(store);

export const store = configureStore({
  //if this is a single function ,
  // it will be directly used as the root reducer for the store.
  reducer: {
    todo: taskReducer,
  },
  /*
  if it is an object of slice reducers , like
  { users: usersSlice.reducer,  posts: postSlice.reducer,},
  configureStore will automatically create the root reducer by passing this object
  to the reduc combine Reducer utility
  */
});

// export default store;
