import axios, { type AxiosInstance } from 'axios'
import { config } from '../lib'

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: config.API_URL,
    timeout: config.REQUEST_TIMEOUT,
  })

  return api
}

export const baseApi = createAPI()
