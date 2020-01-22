import React from 'react'
import { ActivityIndicator } from 'react-native'
import Separator from 'components/Separator'

const PrivateKeyActivityIndicator = () => {
  return (
    <>
      <Separator marginVertical={5} />
      <ActivityIndicator size="large" />
    </>
  )
}

export default PrivateKeyActivityIndicator
