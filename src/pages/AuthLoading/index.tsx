import React, { useEffect, useCallback } from 'react'
import { ActivityIndicator, Text, View, StyleSheet } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import * as SecureStore from 'expo-secure-store'
import { useTranslation } from 'react-i18next'

import { PRIVATE_KEY } from 'lib/keys/secureStore'
import {
  MAIN,
  UNAUTHENTICATED,
} from 'pages/navigation/AuthSwitcherNavigator/keys'

const authLoadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const AuthLoading: React.FC = () => {
  const { navigate } = useNavigation()
  const { t } = useTranslation('authLoading')

  const performInitialLoad = useCallback(async () => {
    const privateKey = await SecureStore.getItemAsync(PRIVATE_KEY)
    // TODO: Validate private key
    navigate(privateKey ? MAIN : UNAUTHENTICATED)
  }, [navigate])

  useEffect(() => {
    setTimeout(() => {
      // Let's wait 3s, so we can demo
      performInitialLoad()
    }, 300)
  }, [performInitialLoad])

  return (
    <View style={authLoadingStyles.container}>
      <ActivityIndicator size="large" />
        <Text>{t('loading')}</Text>
    </View>
  )
}

export default AuthLoading
