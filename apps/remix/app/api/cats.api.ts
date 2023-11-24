import axios from 'axios'

import type { Cat } from 'common-types'

const client = axios.create({
  baseURL: process.env.API_URL,
})

export const catsApi = {
  getAll: () => client.get<Cat[]>('/cats'),
}
