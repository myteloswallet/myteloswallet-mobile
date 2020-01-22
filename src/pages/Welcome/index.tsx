import React from 'react'
import { Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useTranslation } from 'react-i18next'
// @ts-ignore
import styled from '@emotion/native'
import { useTheme } from 'emotion-theming'

import BottomButton from 'components/BottomButton'
import { StackNavigationProp } from '@react-navigation/stack'

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

const Slogan = styled.Text({
  fontFamily: 'Montserrat-Regular',
  textAlign: 'center',
  fontSize: 16,
  color: '#fff',
  marginTop: 48,
})

const StyledLinearGradient = styled(LinearGradient)({
  width: '100%',
  height: '100%',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
})

const Welcome = ({ navigation }: { navigation: StackNavigationProp<any> }) => {
  const theme : any = useTheme()
  const gradientColors = {
    top: theme.colors.flatPurple.dark,
    bottom: theme.colors.flatMagenta.light,
  }

  const { t } = useTranslation('welcome')
  return (
    <>
      <StyledLinearGradient
        colors={Object.values(gradientColors)}>
        <SafeArea>
          <Logo
            source={require('assets/logo.png')}
            resizeMode="contain"
          />
          <Heading>
            <Text style={{ fontFamily: 'Montserrat-Bold' }}> {t('expo')} </Text>
            <Text style={{ fontFamily: 'Montserrat-Regular' }}> {t('starter')} </Text>
          </Heading>
          <Subtitle>
            {`${t('by')} `}
            <Text style={{ fontFamily: 'Montserrat-Bold' }}>
              {t('telosDreamStack')}
            </Text>
          </Subtitle>
          <Slogan>{t('exploreAllTheFeaturesOfTelosDreamstack')}</Slogan>
          <BottomButton
            title={t('alrightLetsGo')}
            onPress={() => {
              navigation.push('CreatePin')
            }}
            disabled={false}
          />
        </SafeArea>
      </StyledLinearGradient>
    </>
  )
}

export default Welcome
