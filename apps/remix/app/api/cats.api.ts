import axios from 'axios'

const client = axios.create({
  baseURL: process.env.API_URL,
})

export const catsApi = {
  getAll: () =>
    // TODO: Use shared types library
    client.get<{ name: string; age: number; breed: string }[]>('/cats'),
}
