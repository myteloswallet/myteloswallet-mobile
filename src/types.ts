import { Theme } from 'theme/types'

export type SingleChild = { children: JSX.Element }
export type SingleChildOrString = { children: JSX.Element | string }
export type MoreThanOneChild = { children: JSX.Element[] }
export type OneOrMoreChildren = { children: JSX.Element | JSX.Element[] }
export interface EmotionComponentProps {
  theme?: Theme
}
