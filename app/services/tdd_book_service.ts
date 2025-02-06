export class TddBookService {
  static purchase(
    nbBook1: number,
    nbBook2: number,
    nbBook3: number,
    nbBook4: number,
    nbBook5: number
  ): number {
    if (nbBook1 === 1 && nbBook2 === 1 && nbBook3 === 1 && nbBook4 === 1) {
      return 32 * 0.8
    }
    if (nbBook1 === 1 && nbBook2 === 1 && nbBook3 === 1) {
      return 24 * 0.9
    }
    if (nbBook1 === 1 && nbBook2 === 1) {
      return 16 * 0.95
    }
    if (nbBook1 === 1) {
      return 8
    }
    return 0
  }
}
