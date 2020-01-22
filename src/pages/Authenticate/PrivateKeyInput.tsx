import styled from '@emotion/native'
import { EmotionComponentProps } from 'types'

const PrivateKeyInput = styled.TextInput<EmotionComponentProps>(
  {
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
  },
  ({ theme }) => ({
    fontFamily: theme.fonts.sansSerif.regular,
    color: theme.colors.flatBlack.dark,
    backgroundColor: theme.colors.flatWhite.light,
  }),
)

export default PrivateKeyInput
