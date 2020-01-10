import { useEffect, useState } from 'react'
import * as Font from 'expo-font'

export default function useFontLoad() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          'Montserrat-Thin': require('assets/fonts/Montserrat/Montserrat-Thin.ttf'),
          'Montserrat-Regular': require('assets/fonts/Montserrat/Montserrat-Regular.ttf'),
          'Montserrat-Bold': require('assets/fonts/Montserrat/Montserrat-Bold.ttf'),
          'Montserrat-Black': require('assets/fonts/Montserrat/Montserrat-Black.ttf'),
        })
      } catch (loadFontError) {
        setError(loadFontError)
      } finally {
        setLoading(false)
      }
    }
    loadFonts()
  }, [])
  return [loading, error]
}
