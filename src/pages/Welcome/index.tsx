import React from 'react'
import { StyleSheet, Text, Image, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useTranslation } from 'react-i18next'

import colors from 'theme/colors'
import BottomButton from 'components/BottomButton'
import { StackNavigationProp } from '@react-navigation/stack'

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

const Welcome = ({ navigation }: { navigation: StackNavigationProp<any> }) => {
  const { t } = useTranslation('welcome')
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
          <Text style={styles.slogan}>{t('firstLineText')}</Text>
          <BottomButton
            title={t('bottomButtonText')}
            onPress={() => {
              navigation.push('CreatePin')
            }}
            disabled={false}
          />
        </SafeAreaView>
      </LinearGradient>
    </>
  )
}

export default Welcome
