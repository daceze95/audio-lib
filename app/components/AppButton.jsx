import React from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { appStyle } from '../config/AppConfig.js';

const AppButton = ({ title, bgColor, color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, bgColor]}
      onPress={onPress}
      activeOpacity={0.95}>
      <Text style={[styles.buttonText, color]}>{title}</Text>
    </TouchableOpacity>
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
