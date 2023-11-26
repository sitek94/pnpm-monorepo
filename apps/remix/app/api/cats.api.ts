import type { Cat } from '@repo/types'
import axios from 'axios'

const client = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:2222',
})

export const catsApi = {
  getAll: () => client.get<Cat[]>('/cats'),
}
