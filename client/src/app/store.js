import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/auth';
import todoReducer from '../features/dashboard/todoSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    todo: todoReducer,
  },
});
