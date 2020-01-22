import React from 'react'
import { ActivityIndicator } from 'react-native'
// @ts-ignore
import styled from '@emotion/native'

const LoadingView = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
})

export default function Loading() {
  return (
    <LoadingView>
      <ActivityIndicator size="large" />
    </LoadingView>
  )
}
