import { configureStore } from '@reduxjs/toolkit';
import courseEnrollSlice from './courseEnrollSlice';

const store = configureStore({
  reducer: {
    courseEnrollSlice
  }
})

export default store;
