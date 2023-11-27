import { json, type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Table, Button, Card, H1, H2, Paragraph } from '@repo/ui'

import { catsApi } from '~/api/cats.api'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export const loader = async () => {
  try {
    const cats = await catsApi.getAll()
    return json({ cats })
  } catch (error: any) {
    console.log(`Error fetching cats: ${error}`)
    return json({ cats: [] })
  }
}

export default function Index() {
  const { cats } = useLoaderData<typeof loader>()

  return (
    <div className="mx-auto mt-12 max-w-prose">
      <H1>PNPM + TURBO MONOREPO</H1>
      <Paragraph>
        This is a Remix app that uses UI components from `@repo/ui` and fetches
        some data from NestJS API.
      </Paragraph>

      <Card.Root className="my-8">
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
          <Card.Description>Card Description</Card.Description>
        </Card.Header>
        <Card.Content>
          This is an example Card component bootstrapped using `shadcn/ui`
          package.
        </Card.Content>
        <Card.Footer />
      </Card.Root>

      <div className="my-8 flex gap-2">
        <Button>Button: Primary</Button>
        <Button variant="secondary">Button: Secondary</Button>
        <Button variant="outline">Button: Outline</Button>
        <Button variant="destructive">Button: Destructive</Button>
      </div>

      <H2>Cats fetched from NestJS</H2>
      <Paragraph>
        Below should be a list of cats fetched from NestJS API. If nothing is
        showing app, check if NestJS app is running.
      </Paragraph>

      <Table.Root className="my-4">
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Breed</Table.Head>
            <Table.Head>Age</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {cats.map(cat => (
            <Table.Row key={cat._id}>
              <Table.Cell>{cat.name}</Table.Cell>
              <Table.Cell>{cat.breed}</Table.Cell>
              <Table.Cell>{cat.age}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
