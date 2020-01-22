import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from 'pages/Home'
import Welcome from 'pages/Welcome'
import CreatePin from 'pages/CreatePin'
import ConfirmPin from 'pages/ConfirmPin'
import { useTranslation } from 'react-i18next'
import Authenticate from 'pages/Authenticate'
const Stack = createStackNavigator()

interface LoadedNavigatorProps {
  isAuthenticated: boolean
}

const LoadedNavigator = ({ isAuthenticated }: LoadedNavigatorProps) => {
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

export default LoadedNavigator
