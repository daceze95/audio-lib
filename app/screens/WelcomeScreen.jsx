import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Button,
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
        <Image style={styles.logo} source={require('../assets/splash.png')} />
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
        </View>
      </Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
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
  logo: {
    width: 150,
    height: 150,
  },
  buttonContainer: {
    flex: 1,
  },
});
