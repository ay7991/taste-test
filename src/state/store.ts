import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './slices/pageSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

const Store = configureStore({ 
  reducer: {
    page: pageReducer,
  }
});

setupListeners(Store.dispatch);

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch;
export default Store;