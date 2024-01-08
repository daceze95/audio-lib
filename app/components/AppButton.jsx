import React from 'react';
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import { appStyle } from '../config/AppConfig.js';

const AppButton = ({ title, bgColor, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[styles.button]}>
        <Text style={[styles.buttonText]}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    backgroundColor: '#00f',
    paddingHorizontal: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
},
buttonText: {
      color: appStyle.white,
  },
});
