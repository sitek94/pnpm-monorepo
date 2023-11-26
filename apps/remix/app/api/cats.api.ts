import type { Cat } from '@repo/types'

const BASE_URL = process.env.API_URL || 'http://localhost:2222'

interface CatsApi {
  getAll: () => Promise<Cat[]>
}

export const catsApi: CatsApi = {
  getAll: async () => {
    const response = await fetch(`${BASE_URL}/cats`)
    const data: unknown = await response.json()

    return data as Cat[]
  },
}
