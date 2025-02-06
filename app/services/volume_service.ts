export class VolumeService {
  public static amountSeries(
    nbTome1: number,
    nbTome2: number,
    nbTome3: number,
    nbTome4: number,
    nbTome5: number
  ): number {
    let price: number = 0
    const volumePrice: number = 8

    const coefficients: Record<number, number> = {
      1: 1,
      2: 0.95,
      3: 0.9,
      4: 0.8,
      5: 0.75,
    }

    const volumes: Record<number, number> = {
      1: nbTome1 || 0,
      2: nbTome2 || 0,
      3: nbTome3 || 0,
      4: nbTome4 || 0,
      5: nbTome5 || 0,
    }
    while (Object.values(volumes).reduce((acc, volume) => acc + volume, 0)) {
      const differentVolumes = Object.values(volumes).filter((volume) => volume > 0).length
      price += volumePrice * differentVolumes * coefficients[differentVolumes]
      for (const key in volumes) {
        if (volumes[key] > 0) {
          volumes[key]--
        }
      }
    }

    return price
  }
}
