import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native'

import CenteredContainer from 'components/CenteredContainer'

export default function Home() {
  const { t } = useTranslation('home')
  return (
    <CenteredContainer>
      <Text>{t('home')}</Text>
    </CenteredContainer>
  )
}
