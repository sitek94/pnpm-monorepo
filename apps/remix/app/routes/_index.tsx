import { json, type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { usersApi } from '~/api/users.api'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export const loader = async () => {
  const { data: users } = await usersApi.getAll()

  return json({ users })
}

export default function Index() {
  const { users } = useLoaderData<typeof loader>()

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>PNPM MONOREPO</h1>
      <hr />
      <h2>Users fetched from NestJS</h2>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  )
}
