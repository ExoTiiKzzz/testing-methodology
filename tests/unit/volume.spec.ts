import { test } from '@japa/runner'
import { VolumeService } from '#services/volume_service'

test.group('Volume', () => {
  test('No volume', async ({ assert }) => {
    assert.equal(VolumeService.amountSeries(0, 0, 0, 0, 0), 0)
  })

  test('1 Volume', async ({ assert }) => {
    assert.equal(VolumeService.amountSeries(1, 0, 0, 0, 0), 8)
  })

  test('2 same volumes', async ({ assert }) => {
    assert.equal(VolumeService.amountSeries(2, 0, 0, 0, 0), 16)
  })

  test('2 different volumes -> 5%', async ({ assert }) => {
    assert.equal(VolumeService.amountSeries(1, 1, 0, 0, 0), 16 * 0.95)
  })

  test('3 different volumes -> 10%', async ({ assert }) => {
    assert.equal(VolumeService.amountSeries(1, 1, 1, 0, 0), 24 * 0.9)
  })

  test('4 different volumes -> 20%', async ({ assert }) => {
    assert.equal(VolumeService.amountSeries(1, 1, 1, 1, 0), 32 * 0.8)
  })

  test('5 different volumes -> 25%', async ({ assert }) => {
    assert.equal(VolumeService.amountSeries(1, 1, 1, 1, 1), 40 * 0.75)
  })

  test('Multiple series', async ({ assert }) => {
    assert.equal(VolumeService.amountSeries(3, 3, 2, 1, 0), 32 * 0.8 + 24 * 0.9 + 16 * 0.95)
  })

  test('Multiple series', async ({ assert }) => {
    assert.equal(VolumeService.amountSeries(2, 2, 2, 1, 1), 51.6)
  })
})
