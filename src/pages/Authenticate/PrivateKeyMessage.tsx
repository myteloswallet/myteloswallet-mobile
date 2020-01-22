import React from 'react'
import { Text } from 'react-native'
import Separator from 'components/Separator'
import { SingleChildOrString } from 'types'

const PrivateKeyMessage = ({ children }: SingleChildOrString) => {
  return (
    <>
      <Separator marginVertical={5} />
      <Text>{children}</Text>
    </>
  )
}

export default PrivateKeyMessage
