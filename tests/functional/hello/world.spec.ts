import { test } from '@japa/runner'

test.group('Hello world', () => {
  test('example test', async ({ client }) => {
    const response = await client.get('/')
    response.assertStatus(200)
    response.assertBody({ hello: 'world' })
  })
})

test.group('errors', () => {
  test('404', async ({ client }) => {
    const response = await client.get('/nimportequoi')
    response.assertStatus(404)
  })
})
