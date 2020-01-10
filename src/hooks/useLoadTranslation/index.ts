import { useState, useEffect } from 'react'
import initTranslation from '../../translations/initTranslation'
import { TFunction } from 'i18next'

export default function useLoadTranslation(): [boolean, TFunction, any] {
  const [loading, setLoading] = useState(true)
  const [t, setT] = useState()
  const [error, setError] = useState()
  const loadTranslation = async () => {
    setLoading(true)
    try {
      const tElement = await initTranslation()
      setT(tElement)
    } catch (loadTranslationError) {
      setError(loadTranslationError)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    loadTranslation()
  }, [])
  return [loading, t, error]
}
