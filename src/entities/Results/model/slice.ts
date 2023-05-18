import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type Result, type Results } from './types'

type ResultsSliceState = {
  resultsList: Results
}

const initialState: ResultsSliceState = {
  resultsList: [],
}

export const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    addNewResult: (state, action: PayloadAction<Result>) => {
      state.resultsList.unshift(action.payload)
      if (state.resultsList.length > 10) {
        state.resultsList = state.resultsList.slice(0, 10)
      }
    },
    clearResults: (state) => {
      state.resultsList = []
    },
  },
  extraReducers: {},
})

export const selectResults = (state: RootState): Results =>
  state.results.resultsList

export const { addNewResult, clearResults } = resultsSlice.actions
