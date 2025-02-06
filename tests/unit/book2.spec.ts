import { test } from '@japa/runner'
import { TddBookService } from '#services/tdd_book_service'

test.group('Book 2', () => {
  test('inutile', async ({ assert }) => {
    assert.equal(TddBookService.purchase(0, 0, 0, 0, 0), 0)
  })

  test('inutile 2', async ({ assert }) => {
    assert.equal(TddBookService.purchase(1, 0, 0, 0, 0), 8)
  })

  test('inutile 2', async ({ assert }) => {
    assert.equal(TddBookService.purchase(1, 1, 0, 0, 0), 16 * 0.95)
  })

  test('inutile 2', async ({ assert }) => {
    assert.equal(TddBookService.purchase(1, 1, 1, 0, 0), 24 * 0.9)
  })

  test('inutile 2', async ({ assert }) => {
    assert.equal(TddBookService.purchase(1, 1, 1, 1, 0), 32 * 0.8)
  })

  test('inutile 2', async ({ assert }) => {
    assert.equal(TddBookService.purchase(1, 1, 1, 1, 1), 40 * 0.75)
  })

  test('inutile 2', async ({ assert }) => {
    assert.equal(TddBookService.purchase(2, 1, 1, 1, 1), 40 * 0.75 + 8)
  })

  test('inutile 2', async ({ assert }) => {
    assert.equal(TddBookService.purchase(2, 2, 1, 1, 1), 40 * 0.75 + 16 * 0.95)
  })

  // test('inutile 2', async ({ assert }) => {
  //   assert.equal(TddBookService.purchase(2, 2, 2, 1, 1), 32 * 0.8 + 32 * 0.8)
  // })
})
