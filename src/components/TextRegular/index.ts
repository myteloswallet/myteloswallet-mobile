import styled from '@emotion/native'
import { EmotionComponentProps } from 'types'

const TextRegular = styled.Text<EmotionComponentProps>({}, ({ theme }) => ({
  fontFamily: theme.fonts.sansSerif.regular,
}))

export default TextRegular
