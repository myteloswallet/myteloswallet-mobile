import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

const loadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function Loading() {
  return (
    <View style={loadingStyles.container}>
      <ActivityIndicator size="large" />
    </View>
  )
}
