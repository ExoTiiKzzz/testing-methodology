type Possibility = number[]

export class BookService2 {
  static reductions: { [key: number]: number } = {
    2: 5,
    3: 10,
    4: 20,
    5: 25,
  }
  static basePrice = 8

  public static purchase(
    nbBook1: number,
    nbBook2: number,
    nbBook3: number,
    nbBook4: number,
    nbBook5: number
  ): number {
    let books: { [key: number]: number } = {
      1: nbBook1,
      2: nbBook2,
      3: nbBook3,
      4: nbBook4,
      5: nbBook5,
    }
    return this.bestPrice(books)
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

  private static differentPossibilities(books: { [key: number]: number }): Possibility[] {
    let possibilities: any[] = []
    let max = this.differentBooks(books)
    while (max > 1) {
      let backupBooks = { ...books }
      let booksNumber = Object.values(backupBooks).reduce((acc, nb) => acc + nb, 0)
      let differentBooks = this.differentBooks(backupBooks)
      let possibility = []
      if (differentBooks > max) {
        differentBooks = max
      }
      while (differentBooks > 1) {
        possibility.push(differentBooks)
        let keys = Object.keys(backupBooks).sort(
          (a, b) => backupBooks[Number.parseInt(b)] - backupBooks[Number.parseInt(a)]
        )
        for (let i = 0; i < differentBooks; i++) {
          if (backupBooks[Number.parseInt(keys[i])] > 0) {
            backupBooks[Number.parseInt(keys[i])]--
            booksNumber--
          }
        }
        differentBooks = this.differentBooks(backupBooks)
        if (differentBooks >= max) {
          differentBooks = max
        }
      }
      max--
      possibilities.push(possibility)
    }
    return possibilities
  }

  public static bestPrice(books: { [key: number]: number }): number {
    const booksNumber = Object.values(books).reduce((acc, nb) => acc + nb, 0)
    const possibilities = this.differentPossibilities(books)
    let bestPossibility: Possibility = []
    let bestPrice = booksNumber * this.basePrice
    for (let possibility of possibilities) {
      let price = 0
      let usedBooks = 0
      for (let nb of possibility) {
        price += (nb * this.basePrice * (100 - this.reductions[nb])) / 100
        usedBooks += nb
      }
      price += (booksNumber - usedBooks) * this.basePrice
      if (price < bestPrice) {
        bestPrice = price
        bestPossibility = possibility
      }
    }
    console.log('bestPossibility', bestPossibility)
    return bestPrice
  }
}
