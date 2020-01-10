import { useState, useEffect } from 'react'
import * as SecureStore from 'expo-secure-store'
import { PRIVATE_KEY } from 'lib/keys/secureStore'

export default function useAuthCheck(): [boolean, any] {
  const [isCheckingAuth, setIsCheckingLoginStatus] = useState(true)
  const [isAuthenticated, setIsLoggedIn] = useState<boolean | null>(null)
  const performAuthCheck = async () => {
    setIsCheckingLoginStatus(true)
    const privateKey = await SecureStore.getItemAsync(PRIVATE_KEY)
    if (privateKey) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
    setIsCheckingLoginStatus(false)
  }
  useEffect(() => {
    setTimeout(() => {
      // Let's wait 3s, so we can demo
      performAuthCheck()
    }, 300)
  }, [])
  return [isCheckingAuth, isAuthenticated]
}
