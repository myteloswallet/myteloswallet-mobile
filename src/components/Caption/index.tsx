import styled from '@emotion/native'
import { EmotionComponentProps } from 'types'

const Caption = styled.Text<EmotionComponentProps>({}, ({ theme }) => ({
  fontFamily: theme.fonts.sansSerif.regular,
  color: theme.colors.flatBlack.light,
}))

export default Caption
