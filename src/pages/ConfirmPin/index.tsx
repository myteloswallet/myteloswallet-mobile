import React, { useEffect } from 'react'
import { Alert } from 'react-native'
import * as Haptics from 'expo-haptics'
import { useTranslation } from 'react-i18next'
import VirtualKeyboard from 'react-native-virtual-keyboard'
import { StackNavigationProp } from '@react-navigation/stack'
import styled from '@emotion/native'

import { usePinSetup, usePinSetupActions } from 'hooks/usePinSetup'
import PinDot from 'components/PinDot'
import DotContainer from 'components/PinDot/DotContainer'
import SafeArea from 'components/SafeArea'

import { EmotionComponentProps } from 'types'

const KeyboardContainer = styled.View({
  width: '100%',
  height: 300,
  position: 'absolute',
  bottom: 32,
  flex: 1,
  alignItems: 'center',
})

const Title = styled.Text<EmotionComponentProps>(
  {
    fontSize: 32,
    marginTop: 32,
  },
  ({ theme }) => ({
    fontFamily: theme.fonts.sansSerif.regular,
  }),
)

const GrayLine = styled.View({
  width: '80%',
  backgroundColor: '#bbb',
  marginVertical: 16,
  height: 0.5,
})

const ConfirmPin = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>
}) => {
  const { pin, pinConfirmation } = usePinSetup()
  const { setPinConfirmation, hashPin, reset } = usePinSetupActions()
  const { t } = useTranslation('confirmPin')

  // On view exit, clean up pins
  useEffect(() => {
    return () => {
      reset()
    }
  }, [reset])

  const handleCompletion = () => {
    navigation.navigate('Authenticate')
  }

  const handleVirtualKeyboard = (val: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    let newPin = pinConfirmation
    if (val === 'back') {
      newPin = newPin.substr(0, newPin.length - 1)
    } else {
      newPin = `${newPin}${val}`
    }
    setPinConfirmation(newPin)
    if (newPin.length === 6 && pin === newPin) {
      hashPin(newPin)
      handleCompletion()
    } else if (newPin.length === 6 && pin !== newPin) {
      Alert.alert(t('wrongPin'), t('providedPinDontMatch'))
      setPinConfirmation('')
    }
  }

  return (
    <SafeArea>
      <Title>{t('confirmPin')}</Title>
      <DotContainer>
        <PinDot active={pinConfirmation.length >= 1} />
        <PinDot active={pinConfirmation.length >= 2} />
        <PinDot active={pinConfirmation.length >= 3} />
        <PinDot active={pinConfirmation.length >= 4} />
        <PinDot active={pinConfirmation.length >= 5} />
        <PinDot active={pinConfirmation.length >= 6} />
      </DotContainer>
      <KeyboardContainer>
        <GrayLine />
        <VirtualKeyboard
          pressMode="char"
          color="#000"
          onPress={handleVirtualKeyboard}
        />
      </KeyboardContainer>
    </SafeArea>
  )
}

export default ConfirmPin
