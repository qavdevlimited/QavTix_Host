import { configureStore } from '@reduxjs/toolkit'
import alertReducer from "./slices/alertSlice"
import settingsReducer from "./slices/settingsSlice"
import authUserReducer from "./slices/authUserSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      alert: alertReducer,
      authUser: authUserReducer,
      settings: settingsReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']