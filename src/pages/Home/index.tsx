import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function Home() {
  const { t } = useTranslation('home')
  return (
    <View style={homeStyles.container}>
      <Text>{t('pageTitle')}</Text>
    </View>
  )
}
