import { createSlice } from '@reduxjs/toolkit'
import { LoadingStatus, SimulatorView } from '@/shared/lib/config'
import { fetchTypedText } from '../api/typedTextApi'

type SimulatorSliceState = {
  typedText: string
  typedTextLoadingStatus: LoadingStatus
  currentView: SimulatorView
}

const initialState: SimulatorSliceState = {
  typedText: '',
  typedTextLoadingStatus: LoadingStatus.Idle,
  currentView: SimulatorView.Instruction,
}

export const simulatorSlice = createSlice({
  name: 'simulator',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTypedText.fulfilled, (state, action) => {
        state.typedText = action.payload
        state.typedTextLoadingStatus = LoadingStatus.Fulfilled
      })
      .addCase(fetchTypedText.pending, (state) => {
        state.typedTextLoadingStatus = LoadingStatus.Pending
      })
      .addCase(fetchTypedText.rejected, (state) => {
        state.typedTextLoadingStatus = LoadingStatus.Rejected
      })
  },
})

export const selectTypedTextLoadingStatus = (state: RootState) =>
  state.simulator.typedTextLoadingStatus

export const selectTypedText = (state: RootState): string =>
  state.simulator.typedText
