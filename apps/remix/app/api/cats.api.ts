import type { Cat } from '@company/types'
import axios from 'axios'

const client = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:2222',
})

export const catsApi = {
  getAll: () => client.get<Cat[]>('/cats'),
}
