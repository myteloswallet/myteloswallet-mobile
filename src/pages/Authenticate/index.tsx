import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  ActivityIndicator,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native'
import { useTranslation } from 'react-i18next'

import colors from 'theme/colors'

import useRegisterForPushNotifications from 'hooks/useRegisterForPushNotifications'
import Separator from 'components/Separator'
import BottomButton from 'components/BottomButton'
import { SingleChildOrString } from 'types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  caption: {
    fontFamily: 'Montserrat-Regular',
    color: colors.flatBlack.light,
  },
  textField: {
    color: colors.flatBlack.dark,
    backgroundColor: colors.flatWhite.light,
    width: '100%',
    height: 50,
    fontFamily: 'Montserrat-Regular',
    paddingHorizontal: 20,
  },
})

const PrivateKeyCopy = ({ children }: SingleChildOrString) => {
  return <Text style={styles.caption}>{children}</Text>
}

const PrivateKeyActivityIndicator = () => {
  return (
    <>
      <Separator marginVertical={5} />
      <ActivityIndicator size="large" />
    </>
  )
}

const PrivateKeyMessage = ({ children }: SingleChildOrString) => {
  return (
    <>
      <Separator marginVertical={5} />
      <Text>{children}</Text>
    </>
  )
}

const Authenticate = () => {
  const [privateKey, setPrivateKey] = useState('')
  const [
    register,
    isRegistering,
    registerError,
  ] = useRegisterForPushNotifications(privateKey)

  const privateKeyInputHandler = (enteredText: string) => {
    setPrivateKey(enteredText)
  }

  const { t } = useTranslation('authenticate')

  const handleContinueButtonPress = () => {
    // TODO: Validate PK
    // TODO: Get Username from PK
    // TODO: Store PK, use pin-derived hash as key
    // register()
  }

  const PrivateKeyTextInput = (
    <TextInput
      editable={!isRegistering}
      placeholder={t('textInputPlaceholder')}
      placeholderTextColor={colors.flatWhite.dark}
      style={styles.textField}
      onChangeText={privateKeyInputHandler}
    />
  )

  return (
    <>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.caption}>{t('privateKeyLabel')}</Text>
        <Separator marginVertical={20} />
        {PrivateKeyTextInput}
        <Separator marginVertical={20} />
        <PrivateKeyCopy>{t('privateKeyCopyText')}</PrivateKeyCopy>
        <Separator marginVertical={5} />
        {isRegistering && <PrivateKeyActivityIndicator />}
        {registerError && (
          <PrivateKeyMessage>{registerError.message}</PrivateKeyMessage>
        )}
      </KeyboardAvoidingView>
      <BottomButton
        title={t('bottomButtonText')}
        onPress={handleContinueButtonPress}
        disabled={privateKey.length < 1}
      />
    </>
  )
}

export default Authenticate
