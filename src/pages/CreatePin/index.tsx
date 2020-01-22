import React from 'react'
import * as Haptics from 'expo-haptics'
const VirtualKeyboard = require('react-native-virtual-keyboard')
import { useTranslation } from 'react-i18next'
import { StackNavigationProp } from '@react-navigation/stack'
import styled from '@emotion/native'

import { usePinSetup, usePinSetupActions } from 'hooks/usePinSetup'

import PinDot from 'components/PinDot'
import DotContainer from 'components/PinDot/DotContainer'
import SafeArea from 'components/SafeArea'

import { EmotionComponentProps } from 'types'

const Title = styled.Text<EmotionComponentProps>(
  {
    fontSize: 32,
    marginTop: 32,
  },
  ({ theme }) => ({
    fontFamily: theme.fonts.sansSerif.regular,
  }),
)

const VirtualKeyBoardContainer = styled.View({
  width: '100%',
  height: 300,
  position: 'absolute',
  bottom: 32,
  flex: 1,
  alignItems: 'center',
})

const GrayLine = styled.View({
  width: '80%',
  backgroundColor: '#bbb',
  marginVertical: 16,
  height: 0.5,
})

const CreatePin = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>
}) => {
  const { pin } = usePinSetup()
  const { setPin } = usePinSetupActions()
  const { t } = useTranslation('pin')
  const handleCompletion = () => {
    navigation.navigate('ConfirmPin')
  }
  const handleVirtualKeyboard = (val: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    let newPin = pin
    if (val === 'back') {
      newPin = newPin.substr(0, newPin.length - 1)
    } else {
      newPin = `${newPin}${val}`
    }
    setPin(newPin)
    if (newPin.length === 6) handleCompletion()
  }

  return (
    <SafeArea>
      <Title>{t('setPin')}</Title>
      <DotContainer>
        <PinDot active={pin.length >= 1} />
        <PinDot active={pin.length >= 2} />
        <PinDot active={pin.length >= 3} />
        <PinDot active={pin.length >= 4} />
        <PinDot active={pin.length >= 5} />
        <PinDot active={pin.length >= 6} />
      </DotContainer>
      <VirtualKeyBoardContainer>
        <GrayLine />
        <VirtualKeyboard
          pressMode="char"
          color="#000"
          onPress={handleVirtualKeyboard}
        />
      </VirtualKeyBoardContainer>
    </SafeArea>
  )
}

export default CreatePin
