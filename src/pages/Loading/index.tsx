import React from 'react'
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'

const loadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function Loading() {
  const { t } = useTranslation('loading')
  return (
    <View style={loadingStyles.container}>
      <ActivityIndicator size="large" />
        <Text>{t('loadingText')}</Text>
    </View>
  )
}
