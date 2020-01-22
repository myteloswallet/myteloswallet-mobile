import styled from '@emotion/native'
import { EmotionComponentProps } from 'types'

const TextBold = styled.Text<EmotionComponentProps>({}, ({ theme }) => ({
  fontFamily: theme.fonts.sansSerif.bold,
}))

export default TextBold
