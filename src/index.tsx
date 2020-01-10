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
import CreatePin from 'pages/CreatePin'
import ConfirmPin from 'pages/ConfirmPin'
import { useTranslation } from 'react-i18next'
import Authenticate from 'pages/Authenticate'

const LoadingStack = createStackNavigator()
const Stack = createStackNavigator()

function LoadedNavigator({ isAuthenticated }: { isAuthenticated: boolean }) {
  const { t } = useTranslation('pages')
  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <Stack.Screen name="Home" component={Home} />
      ) : (
        <>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="CreatePin"
            component={CreatePin}
            options={{
              title: t('createPin'),
            }}
          />
          <Stack.Screen
            name="ConfirmPin"
            component={ConfirmPin}
            options={{
              title: t('createPin'),
            }}
          />
          <Stack.Screen
            name="Authenticate"
            component={Authenticate}
            options={{
              title: t('authenticate'),
            }}
          />
        </>
      )}
    </Stack.Navigator>
  )
}

export default function App() {
  const [loadingFonts] = useFontLoad()
  const [loadingAuth, isAuthenticated] = useAuthCheck()
  const [loadingTranslations] = useLoadTranslation()
  const loading = loadingFonts || loadingAuth || loadingTranslations
  return (
    <PinSetupProvider>
      <NavigationNativeContainer>
        {loading ? (
          <LoadingStack.Navigator>
            <LoadingStack.Screen
              name="Loading"
              component={Loading}
              options={{
                header: () => null,
              }}
            />
          </LoadingStack.Navigator>
        ) : (
          <LoadedNavigator isAuthenticated={isAuthenticated} />
        )}
      </NavigationNativeContainer>
    </PinSetupProvider>
  )
}
