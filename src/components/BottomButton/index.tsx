import React from 'react'
import { GestureResponderEvent } from 'react-native'
import PropTypes from 'prop-types'
import { BottomButtonTouchableOpacity } from './BottomButtonTouchableOpacity'
import { BottomButtonText } from './BottomButtonText'

interface BottomButtonProps {
  title?: string
  disabled?: boolean
  onPress?: (event: GestureResponderEvent) => void
}

const BottomButton: React.FC<BottomButtonProps> = ({
  title,
  onPress,
  disabled = false,
}) => {
  return (
    <BottomButtonTouchableOpacity
      disabled={disabled}
      greyedOut={disabled}
      onPress={onPress}
    >
      <BottomButtonText>{title}</BottomButtonText>
    </BottomButtonTouchableOpacity>
  )
}

BottomButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
}

export default BottomButton
