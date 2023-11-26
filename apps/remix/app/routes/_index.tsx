import { json, type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Button } from '@repo/ui'
import { Card } from '@repo/ui/components/card'

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
    <div className="m-4">
      <h1 className="text-primary text-4xl font-medium">PNPM MONOREPO</h1>
      <hr />
      <h2>Cats fetched from NestJS</h2>
      <pre>{JSON.stringify(cats, null, 2)}</pre>

      <Card title="Card component" href="#components">
        Imported from internal @repo/ui package
      </Card>

      <Button>Button: Imported from internal @repo/ui package</Button>
    </div>
  )
}
