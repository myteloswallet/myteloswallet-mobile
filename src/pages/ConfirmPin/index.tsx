import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Alert } from 'react-native'
import { NavigationScreenComponent } from 'react-navigation'
import * as Haptics from 'expo-haptics'
import { useTranslation } from 'react-i18next'
const VirtualKeyboard = require('react-native-virtual-keyboard')

import { useNavigation } from 'react-navigation-hooks'
import PinDot from 'components/PinDot'
import { usePinSetup, usePinSetupActions } from 'lib/hooks/usePinSetup'
import { AUTHENTICATE } from 'pages/navigation/UnauthenticatedStackNavigator/keys'

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

const ConfirmPin: NavigationScreenComponent<{}, {}> = () => {
  const { navigate, setParams } = useNavigation()
  const { pin, pinConfirmation } = usePinSetup()
  const { setPinConfirmation, hashPin, reset } = usePinSetupActions()
  
  const { t } = useTranslation('confirmPin')
  const title = t('confirmPin')
  useEffect(()=>{
    setParams({ title })
  },
  [title])

  // On view exit, clean up pins
  useEffect(() => {
    return () => {
      reset()
    }
  }, [reset])

  const handleCompletion = () => {
    navigate(AUTHENTICATE)
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

ConfirmPin.navigationOptions = ({ navigation }: { navigation: any }) => ({
  title: navigation.getParam('title', 'Confirm Pin')
});

export default ConfirmPin
