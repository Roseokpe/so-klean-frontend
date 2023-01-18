import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import cleanersReducer from './cleaners';
import appointmentsReducer from './appointments/appointments';

const rootReducer = combineReducers({
  cleaners: cleanersReducer,
  appointment: appointmentsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
