export interface FlatColors {
  flatRed: FlatColor
  flatOrange: FlatColor
  flatYellow: FlatColor
  flatSand: FlatColor
  flatNavyBlue: FlatColor
  flatBlack: FlatColor
  flatMagenta: FlatColor
  flatTeal: FlatColor
  flatSkyBlue: FlatColor
  flatGreen: FlatColor
  flatMint: FlatColor
  flatWhite: FlatColor
  flatGray: FlatColor
  flatForestGreen: FlatColor
  flatPurple: FlatColor
  flatBrown: FlatColor
  flatPlum: FlatColor
  flatWatermelon: FlatColor
  flatLime: FlatColor
  flatPink: FlatColor
  flatMaroon: FlatColor
  flatCoffee: FlatColor
  flatPowderBlue: FlatColor
  flatBlue: FlatColor
}

export interface FlatColor {
  light: string
  dark: string
}

export interface Theme {
  colors: FlatColors,
  fonts: {
    sansSerif: {
      thin: string,
      regular: string,
      bold: string,
      black: string
    }
  }
}
