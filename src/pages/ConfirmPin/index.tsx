import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Alert } from 'react-native'
import * as Haptics from 'expo-haptics'
import { useTranslation } from 'react-i18next'
import VirtualKeyboard from 'react-native-virtual-keyboard'
import PinDot from 'components/PinDot'
import { usePinSetup, usePinSetupActions } from 'hooks/usePinSetup'
import { StackNavigationProp } from '@react-navigation/stack'

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 32,
    marginTop: 32,
  },
  dotContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 250,
    marginTop: 32,
  },
  virtualKeyboardContainer: {
    width: '100%',
    height: 300,
    position: 'absolute',
    bottom: 32,
    flex: 1,
    alignItems: 'center',
  },
  grayLine: {
    width: '80%',
    backgroundColor: '#bbb',
    marginVertical: 16,
    height: 0.5,
  },
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
      Alert.alert(t('noMatchErrorTitle'), t('noMatchErrorDetail'))
      setPinConfirmation('')
    }
  }

  return (
    <SafeAreaView style={styles.viewStyle}>
      <Text style={styles.title}>{t('setConfirmationPin')}</Text>
      <View style={styles.dotContainer}>
        <PinDot active={pinConfirmation.length >= 1} />
        <PinDot active={pinConfirmation.length >= 2} />
        <PinDot active={pinConfirmation.length >= 3} />
        <PinDot active={pinConfirmation.length >= 4} />
        <PinDot active={pinConfirmation.length >= 5} />
        <PinDot active={pinConfirmation.length >= 6} />
      </View>
      <View style={styles.virtualKeyboardContainer}>
        <View style={styles.grayLine} />
        <VirtualKeyboard
          pressMode="char"
          color="#000"
          onPress={handleVirtualKeyboard}
        />
      </View>
    </SafeAreaView>
  )
}

export default ConfirmPin
