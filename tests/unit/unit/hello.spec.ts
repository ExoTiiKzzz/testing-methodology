import { test } from '@japa/runner'
import { HelloWorldService } from '#services/hello_world_service'

test.group('Unit hello', () => {
  test('example test', async ({ assert }) => {
    assert.equal(HelloWorldService.add(1, 2), 3)
  })
})
