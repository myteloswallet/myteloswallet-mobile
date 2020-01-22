import styled from '@emotion/native'
import { EmotionComponentProps } from 'types'

interface PinDotProps extends EmotionComponentProps {
  active: boolean
}

const PinDot = styled.View<PinDotProps>(
  {
    width: 16,
    height: 16,
    borderRadius: 16,
  },
  ({ active, theme }) => ({
    backgroundColor: active
      ? theme.colors.flatPurple.light
      : theme.colors.flatWhite.dark,
  }),
)

export default PinDot
