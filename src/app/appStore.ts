import { configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { simulatorSlice } from '@/entities/simulator/model/slice'
import { baseApi } from '@/shared/api'
import { rootReducer } from './rootReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [simulatorSlice.name],
}

export const createStore = (initialState = {}) =>
  configureStore({
    reducer: persistReducer(
      persistConfig,
      rootReducer
    ) as unknown as typeof rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        thunk: {
          extraArgument: baseApi,
        },
      }),
    preloadedState: initialState,
  })

export const appStore = createStore()
export const persistedStore = persistStore(appStore)
