import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useTranslation } from 'react-i18next'
import styled from '@emotion/native'
import { useTheme } from '@emotion/react'

import BottomButton from 'components/BottomButton'
import { StackNavigationProp } from '@react-navigation/stack'
import { Theme } from 'theme/types'
import TextBold from 'components/TextBold'
import TextRegular from 'components/TextRegular'
import { EmotionComponentProps } from 'types'

const SafeArea = styled.SafeAreaView({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
})

const Logo = styled.Image({
  width: 150,
  height: 150,
  padding: 20,
})

const Heading = styled.Text({
  fontSize: 32,
  color: '#fff',
  marginTop: 16,
})

const Subtitle = styled.Text({
  color: '#fff',
  fontSize: 16,
  marginTop: 8,
})

const Slogan = styled.Text<EmotionComponentProps>(
  {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    marginTop: 48,
  },
  ({ theme }) => ({
    fontFamily: theme.fonts.sansSerif.regular,
  }),
)

const StyledLinearGradient = styled(LinearGradient)<{ colors: string[] }>({
  width: '100%',
  height: '100%',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
})

const Welcome = ({ navigation }: { navigation: StackNavigationProp<any> }) => {
  const { colors } = useTheme() as Theme
  const { t } = useTranslation('welcome')

  const navigateToCreatePin = () => navigation.push('CreatePin')

  return (
    <>
      <StyledLinearGradient
        colors={[
          colors.flatPurple.dark, // Top
          colors.flatMagenta.light, // Bottom
        ]}
      >
        <SafeArea>
          <Logo source={require('assets/logo.png')} resizeMode="contain" />
          <Heading>
            <TextBold>{t('expo')}</TextBold>
            <TextRegular>&nbsp;{t('starter')}</TextRegular>
          </Heading>
          <Subtitle>
            {t('by')}&nbsp;
            <TextBold>{t('telosDreamStack')}</TextBold>
          </Subtitle>
          <Slogan>{t('exploreAllTheFeaturesOfTelosDreamstack')}</Slogan>
          <BottomButton
            title={t('alrightLetsGo')}
            onPress={navigateToCreatePin}
            disabled={false}
          />
        </SafeArea>
      </StyledLinearGradient>
    </>
  )
}

export default Welcome
