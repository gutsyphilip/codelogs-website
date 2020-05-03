export enum cardVariantTypes {
  light = "light",
  dark = "dark",
  white = "white",
}

export interface CardProps {
  hasPadding: boolean
  variant: cardVariantTypes
}
