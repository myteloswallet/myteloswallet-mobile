import React from 'react'
import { NavigationNativeContainer } from '@react-navigation/native'
import { ThemeProvider } from '@emotion/react'

import { PinSetupProvider } from 'hooks/usePinSetup'
import useFontLoad from 'hooks/useFontLoad'
import useAuthCheck from 'hooks/useAuthCheck'
import useLoadTranslation from 'hooks/useLoadTranslation'

import theme from 'theme'

import LoadedNavigator from './LoadedNavigator'
import LoadingNavigator from './LoadingNavigator'

export default function App() {
  const [loadingFonts] = useFontLoad()
  const [loadingAuth, isAuthenticated] = useAuthCheck()
  const [loadingTranslations] = useLoadTranslation()
  const loading = loadingFonts || loadingAuth || loadingTranslations
  return (
    <ThemeProvider theme={theme}>
      <PinSetupProvider>
        <NavigationNativeContainer>
          {loading ? (
            <LoadingNavigator />
          ) : (
            <LoadedNavigator isAuthenticated={isAuthenticated} />
          )}
        </NavigationNativeContainer>
      </PinSetupProvider>
    </ThemeProvider>
  )
}
