import styled from '@emotion/native'
import { EmotionComponentProps } from 'types'

export const BottomButtonText = styled.Text<EmotionComponentProps>(
  {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  ({ theme }) => ({
    color: theme.colors.flatWhite.light,
    fontFamily: theme.fonts.sansSerif.regular,
  }),
)
