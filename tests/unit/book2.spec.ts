import { test } from '@japa/runner'
import { TddBookService } from '#services/tdd_book_service'

test.group('Book 2', () => {
  test('inutile', async ({ assert }) => {
    assert.equal(TddBookService.purchase(0, 0, 0, 0, 0), 0)
  })

  test('inutile 2', async ({ assert }) => {
    assert.equal(TddBookService.purchase(1, 0, 0, 0, 0), 8)
  })
})
