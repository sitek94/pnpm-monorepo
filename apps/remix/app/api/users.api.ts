import axios from "axios";

const client = axios.create({
  baseURL: process.env.API_URL,
});

export const usersApi = {
  getAll: () => client.get<{id: string; name: string}[]>("/users") ,
}

// export const getAuthHeader = (token: string) => ({
//   Authorization: `Bearer ${token}`,
// });
