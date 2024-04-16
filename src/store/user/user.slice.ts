import { getLocalStore } from '@/utils/local-storage';
import { createSlice } from '@reduxjs/toolkit';
import { checkAuth, login, logout, register } from './user.actions';
import { IInitialState } from './user.interface';

const initialState: IInitialState = {
	user: getLocalStore('user'),
	isLoading: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user = action.payload.user;
			})
			.addCase(register.rejected, state => {
				state.isLoading = false;
				state.user = null;
			})
			.addCase(login.pending, state => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				console.log(`fulfilled: ${action.payload.user}`);
				state.user = action.payload.user;
			})
			.addCase(login.rejected, state => {
				state.isLoading = false;
				state.user = null;
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user = null;
			})
			.addCase(checkAuth.fulfilled, (state, action) => {
				console.log(`Before: ${state.user}`);
				state.user = action.payload.user;
				console.log(`After: ${state.user}`);
			});
	},
});
