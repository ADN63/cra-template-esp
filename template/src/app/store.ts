import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import configReducer from '../esp8266/slice/config/configSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['theme']
}


export const rootReducers = combineReducers({
    config: configReducer,    
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
    reducer: {
        root: persistedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck : false
    }).concat(...[]),
});

setupListeners(store.dispatch);

export const persistore = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
