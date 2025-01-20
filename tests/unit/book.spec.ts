import { test } from '@japa/runner'
import { BookService } from '#services/book_service'

test.group('Book', () => {
  test('5%', async ({ assert }) => {
    assert.equal(BookService.purchase(2, 1, 0, 0, 0), 8 + 16 * 0.95)
  })

  test('10%', async ({ assert }) => {
    assert.equal(BookService.purchase(1, 1, 1, 0, 0), 24 * 0.9)
  })

  test('20%', async ({ assert }) => {
    assert.equal(BookService.purchase(1, 1, 1, 1, 0), 32 * 0.8)
  })

  test('25%', async ({ assert }) => {
    assert.equal(BookService.purchase(1, 1, 1, 1, 1), 40 * 0.75)
  })

  test('5 at 25% + 3 at 10% + 2 at 5% + 1 flat', async ({ assert }) => {
    assert.equal(BookService.purchase(2, 1, 3, 1, 4), 40 * 0.75 + 24 * 0.9 + 16 * 0.95 + 8)
  })

  test('nothing', async ({ assert }) => {
    assert.equal(BookService.purchase(0, 0, 0, 0, 0), 0)
  })

  test('5 at 25% + 3 at 10%', async ({ assert }) => {
    assert.equal(BookService.purchase(2, 2, 2, 1, 1), 40 * 0.75 + 24 * 0.9)
  })

  test('5 at 25% + 2 at 5%', async ({ assert }) => {
    assert.equal(BookService.purchase(2, 2, 1, 1, 1), 40 * 0.75 + 16 * 0.95)
  })
})
