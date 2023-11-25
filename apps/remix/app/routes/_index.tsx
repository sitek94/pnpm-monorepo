import { json, type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { catsApi } from '~/api/cats.api'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export const loader = async () => {
  try {
    const { data: cats } = await catsApi.getAll()
    return json({ cats })
  } catch (error) {
    console.log(`Error fetching cats: ${error}`)
    return json({ cats: [] })
  }
}

export default function Index() {
  const { cats } = useLoaderData<typeof loader>()

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>PNPM MONOREPO</h1>
      <hr />
      <h2>Cats fetched from NestJS</h2>
      <pre>{JSON.stringify(cats, null, 2)}</pre>
      <p>Test</p>
    </div>
  )
}
