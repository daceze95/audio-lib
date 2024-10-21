import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { appStyle } from '../config/AppConfig.js';

const AppTextInput = ({ label, placeHolder, icon, rightIcon, ...others }) => {
  return (
    <View style={{marginTop: 10}}>
      {label && <Text>{label}</Text>}
      <View style={styles.container}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={24}
            style={styles.icon}
            color={appStyle.grey}
          />
        )}
        <TextInput
          placeholder={placeHolder}
          {...others}
          style={styles.textInput}
        />
        {rightIcon && (
          <MaterialCommunityIcons
            name={rightIcon}
            size={24}
            style={styles.icon}
            color={appStyle.grey}
          />
        )}
      </View>
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: appStyle.green,
    marginBottom: 5,
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center'
  },
  icon: {
    marginRight: 5
  },
  textInput: {
    flex: 1
  }
});
