import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, logIn, logOut, register } from './operations';
import { toast } from 'react-hot-toast';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
        toast.success('Registration successfull!');
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        toast.error(`Something went wrong. Error message: ${state.error}`);
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
        toast.success('Login successfull!');
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
        toast.error(`Something went wrong. Error message: ${state.error}`);
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
        toast.success('Logout successfull!');
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
        toast.error(`Something went wrong. Error message: ${state.error}`);
      })
      .addCase(fetchCurrentUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;