import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
} from 'react-native';

import Screen from '../components/Screen.jsx';
import { appStyle } from '../config/AppConfig.js';
import AppButton from '../components/AppButton.jsx';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/welcome-screen-bg.png')}
      style={styles.container}>
      <Screen style={styles.container}>
        <Image style={appStyle.logo} source={require('../assets/splash.png')} />

        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Welcome to Audio Lib</Text>
          <Text style={[styles.textStyle, styles.aboutTextStyle]}>
            Audio Lib allows you to listen to your favorite book anytime,
            anywhere.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <AppButton
            title='Get Started'
            onPress={() => console.log('Pressed!')}
          />

          <View style={styles.innerButtonContainer}>
            <Text
              style={[
                styles.textStyle,
                styles.aboutTextStyle,
                styles.smallerText,
              ]}>
              Already have an account?
            </Text>
            <AppButton
              title='Sign In'
              onPress={() => console.log('signin page')}
              bgColor={{
                borderWidth: 2,
                borderColor: appStyle.green,
                backgroundColor: 'transparent',
              }}
              color={{ color: appStyle.green }}
            />
            <Text style={[styles.usernameSigninText, styles.smallerText]}>
              Sign in with audioLib username
            </Text>
          </View>
        </View>
      </Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: appStyle.white,
  },
  aboutTextStyle: {
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 15,
    marginTop: 5,
  },
  // logo: {
  //   width: 150,
  //   height: 150,
  // },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    gap: 20,
  },
  innerButtonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 8,
  },
  usernameSigninText: { color: appStyle.green },
  smallerText: { fontSize: 14 },
});
