import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

import Screen from '../components/Screen';
import { appStyle } from '../config/AppConfig.js';
import AppTextInput from '../components/AppTextInput.jsx';
import AppButton from '../components/AppButton.jsx';

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image
        source={require('../assets/splash.png')}
        style={[appStyle.logo, styles.logoStyle]}
      />
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.heading}>Welcome Back</Text>
          <Text style={styles.subHeading}>Don't have an account? Sign Up</Text>
        </View>
        <View style={styles.inputFieldContainer}>
          <AppTextInput
            label='Username'
            placeHolder='Type your username'
            icon='email'
          />
          <AppTextInput
            label='Password'
            placeHolder='Type your password'
            icon='lock'
            rightIcon='eye-off-outline'
            secureTextEntry
          />
          <Text style={styles.forgotPasswordText}>forgot password?</Text>
        </View>
        <View>
          <AppButton
            title='Sign in'
            bgColor={{ backgroundColor: appStyle.green }}
            onPress={() => console.log('Pressed!')}
          />
          <Text style={{textAlign: 'center', marginVertical: 10}}>OR</Text>
          <AppButton
            title='Continue with Google'
            bgColor={{ backgroundColor: appStyle.green }}
            onPress={() => console.log('Pressed!')}
          />
        </View>
      </View>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appStyle.black,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  forgotPasswordText: {
    textAlign: 'right',
  },
  formContainer: {
    backgroundColor: appStyle.white,
    borderRadius: 25,
    width: '100%',
    height: '70%',
    padding: 25,
    marginTop: 40,
    justifyContent: 'space-around',
  },
  logoStyle: {
    marginTop: 50,
    width: 100,
    height: 100,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  subHeading: {
    marginTop: 5,
    textAlign: 'center',
  },
  inputFieldContainer: {
    marginVertical: 10,
  },
});
