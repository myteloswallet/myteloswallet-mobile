import { EmotionComponentProps } from 'types'
import styled from '@emotion/native'

interface SeparatorProps extends EmotionComponentProps {
  marginVertical: number
}

const Separator = styled.View<SeparatorProps>({}, ({ marginVertical }) => ({
  marginVertical: marginVertical,
}))

export default Separator
