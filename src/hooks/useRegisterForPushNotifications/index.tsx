/* eslint consistent-return: 0 */ // --> OFF

import { useState } from 'react'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

const ENDPOINT =
  'https://us-central1-dac-notifier.cloudfunctions.net/registerForPushNotifications'

export default function useRegisterForPushNotifications(
  username: string,
): [() => Promise<Response>, boolean, Error] {
  const [isRegistering, setIsRegistering] = useState(false)
  const [error, setError] = useState(null)
  const register = async () => {
    setIsRegistering(true)
    setError(null)
    try {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS,
      )
      let finalStatus = existingStatus
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
        finalStatus = status
      }
      if (finalStatus !== 'granted') {
        return
      }
      const token = await Notifications.getExpoPushTokenAsync()
      return fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            token: { value: token },
            user: { username },
          },
        }),
      })
    } catch (pushNotificationRegisterError) {
      setError(pushNotificationRegisterError)
    } finally {
      setIsRegistering(false)
    }
  }
  return [register, isRegistering, error]
}
