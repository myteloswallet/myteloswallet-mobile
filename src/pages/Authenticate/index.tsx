import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from '@emotion/native'
import { useTheme } from '@emotion/react'

import useRegisterForPushNotifications from 'hooks/useRegisterForPushNotifications'

import Separator from 'components/Separator'
import BottomButton from 'components/BottomButton'
import Caption from 'components/Caption'

import PrivateKeyActivityIndicator from './PrivateKeyActivityIndicator'
import PrivateKeyMessage from './PrivateKeyMessage'
import PrivateKeyInput from './PrivateKeyInput'

import { Theme } from 'theme/types'

const ContainerView = styled.KeyboardAvoidingView({
  flex: 1,
  width: '100%',
  padding: 20,
})

const Authenticate = () => {
  const {
    colors: { flatWhite },
  } = useTheme() as Theme
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
    <PrivateKeyInput
      editable={!isRegistering}
      placeholder={t('pastePrivateKeyHere')}
      placeholderTextColor={flatWhite.dark}
      onChangeText={privateKeyInputHandler}
    />
  )

  return (
    <>
      <ContainerView behavior="padding" enabled>
        <Caption>{t('privateKey')}</Caption>
        <Separator marginVertical={20} />
        {PrivateKeyTextInput}
        <Separator marginVertical={20} />
        <Caption>{t('youCanImportYourTELOSAccount')}</Caption>
        <Separator marginVertical={5} />
        {isRegistering && <PrivateKeyActivityIndicator />}
        {registerError && (
          <PrivateKeyMessage>{registerError.message}</PrivateKeyMessage>
        )}
      </ContainerView>
      <BottomButton
        title={t('continue')}
        onPress={handleContinueButtonPress}
        disabled={privateKey.length < 1}
      />
    </>
  )
}

export default Authenticate
