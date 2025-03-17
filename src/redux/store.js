import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducer/dataslice.js';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});