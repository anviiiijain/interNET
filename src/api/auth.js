import axios from 'axios'
import { axiosInstance } from '../utils/AxiosHandler'
import { BASE_URL } from '../constants/baseURL'

export const login = async (payload) => {
  const res = await axiosInstance.post('/api/auth/login', payload)
  return res
}

export const forgotPass = async (payload) => {
  const res = await axiosInstance.post('/api/auth/forgot-password', payload)
  return res
}

export const resetPass = async ({ pass, token }) => {
  const axiosh = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
    },
    validateStatus: (status) => status < 500,
  })
  console.log({ token })
  const res = await axiosh.post('/api/auth/reset-password', {
    newPassword: pass,
  })
  return res
}
