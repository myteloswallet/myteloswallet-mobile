/* eslint-disable global-require */
import React from 'react'
import { NavigationScreenComponent } from 'react-navigation'
import { StyleSheet, Text, Image, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from 'react-navigation-hooks'

import colors from 'theme/colors'
import BottomButton from 'components/BottomButton'
import { CREATE_PIN } from 'pages/navigation/UnauthenticatedStackNavigator/keys'
import { useTranslation } from 'react-i18next'

const gradientColors = {
  top: colors.flatPurple.dark,
  bottom: colors.flatMagenta.light,
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientStyle: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: 150,
    height: 150,
    padding: 20,
  },
  heading: {
    fontSize: 32,
    color: '#fff',
    marginTop: 16,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 8,
  },
  slogan: {
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    marginTop: 48,
  },
})

const Welcome: NavigationScreenComponent<{}, {}> = () => {
  const { t } = useTranslation('welcome')
  const { navigate } = useNavigation()
  const navigateToAuthenticateScreen = () => {
    navigate(CREATE_PIN)
  }
  return (
    <>
      <LinearGradient
        colors={Object.values(gradientColors)}
        style={styles.gradientStyle}
      >
        <SafeAreaView style={styles.containerStyle}>
          <Image
            source={require('assets/logo.png')}
            resizeMode="contain"
            style={styles.logoStyle}
          />
          <Text style={styles.heading}>
            <Text style={{ fontFamily: 'Montserrat-Bold' }}>EXPO</Text>
            <Text style={{ fontFamily: 'Montserrat-Regular' }}> Starter</Text>
          </Text>
          <Text style={styles.subtitle}>
            {`${t('by')} `}
            <Text style={{ fontFamily: 'Montserrat-Bold' }}>
              Telos Dream Stack
            </Text>
          </Text>
          <Text style={styles.slogan}>
            {t('firstLineText')}
          </Text>
          <BottomButton
            title={t('bottomButtonText')}
            onPress={navigateToAuthenticateScreen}
            disabled={false}
          />
        </SafeAreaView>
      </LinearGradient>
    </>
  )
}

Welcome.navigationOptions = {
  header: null,
}

export default Welcome
