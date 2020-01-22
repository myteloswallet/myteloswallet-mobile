import React, { useState } from 'react'
import {
  ActivityIndicator,
  Text
} from 'react-native'
import { useTranslation } from 'react-i18next'
// @ts-ignore
import styled from '@emotion/native'

import useRegisterForPushNotifications from 'hooks/useRegisterForPushNotifications'
import Separator from 'components/Separator'
import BottomButton from 'components/BottomButton'
import { SingleChildOrString } from 'types'
import { useTheme } from 'emotion-theming'

const Keyboard = styled.KeyboardAvoidingView({
  flex: 1,
  width: '100%',
  padding: 20,  
})

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

const PrivateKeyInput = styled.TextInput({
  width: '100%',
  height: 50,
  fontFamily: 'Montserrat-Regular',
  paddingHorizontal: 20,
  },
  (props: any) => ({
    color: props.theme.colors.flatBlack.dark,
    backgroundColor: props.theme.colors.flatWhite.light,
  }))

const Authenticate = () => {
  const [privateKey, setPrivateKey] = useState('')
  const { colors } : any = useTheme()

  const [
    register,
    isRegistering,
    registerError,
  ] = useRegisterForPushNotifications(privateKey)

  const privateKeyInputHandler = (enteredText: string) => {
    setPrivateKey(enteredText)
  }

  const Caption = styled.Text({
    fontFamily: 'Montserrat-Regular',
    color: colors.flatBlack.light,
  })

  const { t } = useTranslation('authenticate')

  const handleContinueButtonPress = () => {
    // TODO: Validate PK
    // TODO: Get Username from PK
    // TODO: Store PK, use pin-derived hash as key
    // register()
  }

  const PrivateKeyTextInput = (
    <PrivateKeyInput
      editable={!isRegistering}
      placeholder={t('pastePrivateKeyHere')}
      placeholderTextColor={colors.flatWhite.dark}
      onChangeText={privateKeyInputHandler}
    />
  )
  
  const PrivateKeyCopy = ({ children }: SingleChildOrString) => {
    return <Caption>{children}</Caption>
  }

  return (
    <>
      <Keyboard behavior="padding" enabled>
        <Caption>{t('privateKey')}</Caption>
        <Separator marginVertical={20} />
        {PrivateKeyTextInput}
        <Separator marginVertical={20} />
        <PrivateKeyCopy>{t('youCanImportYourTELOSAccount')}</PrivateKeyCopy>
        <Separator marginVertical={5} />
        {isRegistering && <PrivateKeyActivityIndicator />}
        {registerError && (
          <PrivateKeyMessage>{registerError.message}</PrivateKeyMessage>
        )}
      </Keyboard>
      <BottomButton
        title={t('continue')}
        onPress={handleContinueButtonPress}
        disabled={privateKey.length < 1}
      />
    </>
  )
}

export default Authenticate
