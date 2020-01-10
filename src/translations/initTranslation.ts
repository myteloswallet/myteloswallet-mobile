import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as Localization from 'expo-localization'

import en from 'translations/languages/en'
import es from 'translations/languages/es'

export default () => {
  const locale = Localization?.locale?.split('-')[0]

  return i18n.use(initReactI18next).init({
    resources: { en, es },
    lng: locale,
    fallbackLng: 'en',
    react: {
      useSuspense: false,
    },
  })
}
