import { test } from '@japa/runner'
import { BookService } from '#services/book_service'

test.group('Book', () => {
  test('No reduction', async ({ assert }) => {
    assert.equal(BookService.purchase(3, 0, 0, 0, 0), 24)
  })

  test('Apply one reduction', async ({ assert }) => {
    assert.equal(BookService.purchase(1, 1, 1, 0, 0), 24 * 0.9)
  })

  test('Apply one reduction + one flat', async ({ assert }) => {
    assert.equal(BookService.purchase(2, 1, 0, 0, 0), 8 + 16 * 0.95)
  })

  test('Apply two reductions', async ({ assert }) => {
    assert.equal(BookService.purchase(2, 2, 2, 1, 1), 40 * 0.75 + 24 * 0.9)
  })
})
