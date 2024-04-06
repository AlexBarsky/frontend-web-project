import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAddToCardPayload, ICartInitialState } from './cart.types';

const initialState: ICartInitialState = {
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IAddToCardPayload>) => {
			const isExistSize = state.items.some(
				item => item.size === action.payload.size,
			);

			if (!isExistSize) {
				state.items.push({ ...action.payload, id: state.items.length });
			}
		},
		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter(item => item.id !== action.payload.id);
		},
		changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
			const { id, type } = action.payload;
			const item = state.items.find(item => item.id === id);
			if (item) {
				if (type === 'plus') {
					item.quantity++;
				} else {
					item.quantity--;
				}
			}
		},
		reset: state => {
			state.items = [];
		},
	},
});
