export class TddBookService {
  static unitPrice = 8
  static coefficients: Record<number, number> = {
    1: 1,
    2: 0.95,
    3: 0.9,
    4: 0.8,
    5: 0.75,
  }

  static purchase(
    nbBook1: number,
    nbBook2: number,
    nbBook3: number,
    nbBook4: number,
    nbBook5: number
  ): number {
    let price = 0
    const volumes: Record<number, number> = {
      1: nbBook1 || 0,
      2: nbBook2 || 0,
      3: nbBook3 || 0,
      4: nbBook4 || 0,
      5: nbBook5 || 0,
    }
    while (Object.values(volumes).reduce((acc, volume) => acc + volume, 0)) {
      const differentVolumes = Object.values(volumes).filter((volume) => volume > 0).length
      price += this.unitPrice * differentVolumes * this.coefficients[differentVolumes]
      for (const key in volumes) {
        if (volumes[key] > 0) {
          volumes[key]--
        }
      }
    }

    return price
  }
}
