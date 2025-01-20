export class BookService {
  static reductions: { [key: number]: number } = {
    2: 7.5,
    3: 10,
  }

  static basePrice = 8

  static maxDifferentBooks = 3

  public static purchase(nbBook1: number, nbBook2: number, nbBook3: number): number {
    let books: { [key: number]: number } = {
      1: nbBook1,
      2: nbBook2,
      3: nbBook3,
    }

    let total = 0
    let discount = 0
    let differentBooks = 0
    let totalBooks = Object.values(books).reduce((acc, nb) => acc + nb, 0)
    total = totalBooks * this.basePrice

    while (totalBooks > 1) {
      differentBooks = this.differentBooks(books)
      totalBooks -= differentBooks
      discount += (differentBooks * this.basePrice * this.reductions[differentBooks]) / 100
      Object.values(books).forEach((nb, index) => {
        if (nb > 0) {
          books[index + 1]--
        }
      })
    }

    return total - discount
  }

  public static differentBooks(books: { [key: number]: number }): number {
    let differentBooks = 0
    Object.values(books).forEach((nb) => {
      if (nb > 0) {
        differentBooks++
      }
    })
    return differentBooks
  }

  private static differentPossibilities(books: { [key: number]: number }): any[] {
    let possibilities: any[] = []
    for (let i = 0; i < this.maxDifferentBooks; i++) {}
    return possibilities
  }
}
