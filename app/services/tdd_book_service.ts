export class TddBookService {
  static purchase(
    nbBook1: number,
    nbBook2: number,
    nbBook3: number,
    nbBook4: number,
    nbBook5: number
  ): number {
    if (nbBook1 === 1) {
      return 8
    }
    return 0
  }
}
