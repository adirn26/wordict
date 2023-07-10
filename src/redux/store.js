import {configureStore} from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { reducer } from './reducer/reducer';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const store = configureStore({
    reducer: {
      wordReducer: persistReducer(persistConfig, reducer)
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
});

export let persistor = persistStore(store)
  
export default store;