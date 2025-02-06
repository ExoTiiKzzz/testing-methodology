export class TddBookService {
  static purchase(
    nbBook1: number,
    nbBook2: number,
    nbBook3: number,
    nbBook4: number,
    nbBook5: number
  ): number {
    let finalPrice = 0
    let books = [nbBook1, nbBook2, nbBook3, nbBook4, nbBook5]
    // eslint-disable-next-line @unicorn/no-for-loop
    for (let i = 0; i < books.length; i++) {
      if (books[i] > 1) {
        finalPrice += 8
        books[i]--
      }
    }
    if (books[0] === 1 && books[1] === 1 && books[2] === 1 && books[3] === 1 && books[4] === 1) {
      return finalPrice + 40 * 0.75
    }
    if (books[0] === 1 && books[1] === 1 && books[2] === 1 && books[3] === 1) {
      return finalPrice + 32 * 0.8
    }
    if (books[0] === 1 && books[1] === 1 && books[2] === 1) {
      return finalPrice + 24 * 0.9
    }
    if (books[0] === 1 && books[1] === 1) {
      return finalPrice + 16 * 0.95
    }
    if (books[0] === 1) {
      return finalPrice + 8
    }
    return 0
  }
}
