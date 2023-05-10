import { createAsyncThunk } from '@reduxjs/toolkit'
import { baseApi } from '@/shared/api'

export const fetchTypedText = createAsyncThunk<string>(
  'data/getTypedTextAction',
  async (_, { getState, requestId }) => {
    try {
      const api = baseApi
      const { data } = await api.get<string>(
        `/?type=meat-and-filler&paras=1&format=text`
      )
      return data
    } catch (error) {
      console.log('some error')
      throw error
    }
  }
)
