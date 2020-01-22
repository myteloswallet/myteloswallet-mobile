import React from 'react'
import { ActivityIndicator } from 'react-native'
import CenteredContainer from 'components/CenteredContainer'

export default function Loading() {
  return (
    <CenteredContainer>
      <ActivityIndicator size="large" />
    </CenteredContainer>
  )
}
