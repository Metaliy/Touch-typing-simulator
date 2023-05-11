import { createAsyncThunk } from '@reduxjs/toolkit'
import { baseApi } from '@/shared/api'

export const fetchTypedText = createAsyncThunk<string>(
  'data/getTypedTextAction',
  async (_, { getState, requestId }) => {
    try {
      const api = baseApi
      const { data } = await api.get<{ text: string }>(
        `/get?format=json&number=3`
      )
      console.log(JSON.stringify(data))
      return data.text
    } catch (error) {
      console.log(error, 'some error')
      throw error
    }
  }
)
