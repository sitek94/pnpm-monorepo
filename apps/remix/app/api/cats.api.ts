import axios from 'axios'

import type { Cat } from '../../../../libs/types'

const client = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:2222',
})

export const catsApi = {
  getAll: () => client.get<Cat[]>('/cats'),
}
