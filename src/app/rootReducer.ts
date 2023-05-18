import { combineReducers } from '@reduxjs/toolkit'
import { resultsSlice } from '@/entities/Results/model/slice'
import { simulatorSlice } from '@/entities/simulator/model/slice'

export const rootReducer = combineReducers({
  [simulatorSlice.name]: simulatorSlice.reducer,
  [resultsSlice.name]: resultsSlice.reducer,
})
