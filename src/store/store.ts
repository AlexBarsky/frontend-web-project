import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cartSlice } from './cart/cart.slice';
import { userSlice } from './user/user.slice';

const persistConfig = {
	key: 'amazon-shop-clone',
	storage: storage,
	whitelist: ['cart'],
};

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
	// carousel: carouselSlice.reducer,
	user: userSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof rootReducer>;
