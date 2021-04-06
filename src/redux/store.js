import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-reducers';
import phonebookReducer from './phonebook/phonebook-reducers';

// const myMiddleware = store => next => action => {
// 	console.log('ПРОСЛОЙКА, йопта!', action);

// 	next(action);
// }

const middleware = [
	...getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
	// myMiddleware,
	// logger,
];

const authPersistConfig = {
	key: 'authToken',
	storage,
	whitelist: ['token'],
	// blacklist: ['user', 'error'],
};

const store = configureStore({
    reducer: {
		auth: persistReducer(authPersistConfig, authReducer),
        contacts: phonebookReducer,
    },
    middleware,
	// devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };