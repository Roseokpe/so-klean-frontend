import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_APPOINTMENT = 'so-klean/appointments/ADD_APPOINTMENT';
const GET_APPOINTMENT = 'so-klean/cleaners/GET_APPOINTMENT';
const DELETE_APPOINTMENT = 'so-klean/cleaners/DELETE_APPOINTMENT';
const initialState = [];

export const fetchAPPOINTMENT = createAsyncThunk(GET_APPOINTMENT, async () => {
  const data = await fetch('http://localhost:3000/appointments/');
  const response = await data.json();
  const newList = Object.keys(response);
  const appointments = [];
  newList.map((key) => appointments.push({
    id: response[key].id,
    country: response[key].location,
    date: response[key].date
  }));
  console.log(appointments)
  return appointments;
});

export const addAppointment = (appointment) => (dispatch) => {
  axios
    .post('http://localhost:3000/appointments/', appointment)
    .then((res) => {
      dispatch({
        type: ADD_APPOINTMENT,
        payload: res.data,
      });
    })
    .catch((err) => err);
};

export const deleteappoint = createAsyncThunk(DELETE_APPOINTMENT, async (id) => {
  await fetch(`http://localhost:3000/appointments/${id}`, {
    method: 'DELETE',
  });
  return +id;
});

const appointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_APPOINTMENT}/fulfilled`:
      return action.payload;
    case ADD_APPOINTMENT:
      return [...state, action.payload];
    case `${DELETE_APPOINTMENT}/fulfilled`:
      return state.filter((state) => state.id !== action.payload);
    default:
      return state;
  }
};

export default appointmentsReducer;
