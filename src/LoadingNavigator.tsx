import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Loading from 'pages/Loading'

const Stack = createStackNavigator()

const LoadingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  )
}

export default LoadingNavigator
