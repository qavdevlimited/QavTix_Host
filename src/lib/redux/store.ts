import { configureStore } from '@reduxjs/toolkit'
import alertReducer from "./slices/alertSlice"
import authUserReducer from "./slices/authUserSlice"
import confirmationReducer from './slices/confirmationSlice'
import successModalReducer from './slices/successModalSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      alert: alertReducer,
      authUser: authUserReducer,
      confirmation: confirmationReducer,
      successModal: successModalReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']