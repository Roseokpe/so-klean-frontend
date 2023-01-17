import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_CLEANER = 'so-klean/cleaners/ADD_CLEANER';
const GET_CLEANER = 'so-klean/cleaners/GET_CLEANER';
const DELETE_CLEANER = 'so-klean/cleaners/DELETE_CLEANER';
const initialState = [];

export const fetchCLEANER = createAsyncThunk(GET_CLEANER, async () => {
  const data = await fetch('http://127.0.0.1:3000/api/v1/cleaners');
  const response = await data.json();
  const newList = Object.keys(response);
  const cleaners = [];
  newList.map((key) => cleaners.push({
    id: response[key].id,
    name: response[key].name,
    country: response[key].location,
    image: response[key].photo,
    chrges: response[key].chrges,
  }));
  return cleaners;
});

export const addcleaner = (cleaner) => (dispatch) => {
  axios
    .post('http://localhost:3000/api/v1/cleaners', cleaner)
    .then((res) => {
      dispatch({
        type: ADD_CLEANER,
        payload: res.data,
      });
    })
    .catch((err) => err);
};

export const deletecleaner = createAsyncThunk(DELETE_CLEANER, async (id) => {
  await fetch(`http://127.0.0.1:3000/api/v1/cleaners/${id}`, {
    method: 'DELETE',
  });
  return +id;
});

const cleanersReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_CLEANER}/fulfilled`:
      return action.payload;
    case ADD_CLEANER:
      return [...state, action.payload];
    case `${DELETE_CLEANER}/fulfilled`:
      return state.filter((state) => state.id !== action.payload);
    default:
      return state;
  }
};

export default cleanersReducer;
