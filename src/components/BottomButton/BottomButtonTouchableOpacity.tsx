import styled from '@emotion/native'
import { EmotionComponentProps } from 'types'

interface BottomButtonTouchableOpacityProps extends EmotionComponentProps {
  greyedOut?: boolean
}

export const BottomButtonTouchableOpacity = styled.TouchableOpacity<BottomButtonTouchableOpacityProps>(
  {
    position: 'absolute',
    bottom: 0,
    height: 64,
    width: '101%',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  ({ greyedOut, theme }) => ({
    backgroundColor: greyedOut
      ? theme.colors.flatWhite.dark
      : theme.colors.flatBlack.dark,
  }),
)
