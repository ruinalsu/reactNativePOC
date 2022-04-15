import { configureStore, combineReducers } from '@reduxjs/toolkit';
import sitesReducer from './sites/sitesSlice';

const rootReducer = combineReducers({
  sitesReducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;