import { combineReducers } from '@reduxjs/toolkit'
import { simulatorSlice } from '@/entities/simulator/model/slice'

export const rootReducer = combineReducers({
  [simulatorSlice.name]: simulatorSlice.reducer,
})
