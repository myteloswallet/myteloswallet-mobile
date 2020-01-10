import React from 'react'
import { NavigationNativeContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { PinSetupProvider } from 'hooks/usePinSetup'
import useFontLoad from 'hooks/useFontLoad'
import useAuthCheck from 'hooks/useAuthCheck'
import useLoadTranslation from 'hooks/useLoadTranslation'

import Loading from 'pages/Loading'
import Home from 'pages/Home'
import Welcome from 'pages/Welcome'

const Stack = createStackNavigator()

export default function App() {
  const [loadingFonts] = useFontLoad()
  const [loadingAuth, isAuthenticated] = useAuthCheck()
  const [loadingTranslations] = useLoadTranslation()
  const loading = loadingFonts || loadingAuth || loadingTranslations
  const renderStackNavigatorContents = (
    isLoading: boolean,
    isAuth: boolean,
  ) => {
    if (isLoading) return <Stack.Screen name="Loading" component={Loading} />
    return isAuth ? (
      <Stack.Screen name="Home" component={Home} />
    ) : (
      <Stack.Screen name="Welcome" component={Welcome} />
    )
  }
  return (
    <PinSetupProvider>
      <NavigationNativeContainer>
        <Stack.Navigator>
          {renderStackNavigatorContents(loading, isAuthenticated)}
        </Stack.Navigator>
      </NavigationNativeContainer>
    </PinSetupProvider>
  )
}
