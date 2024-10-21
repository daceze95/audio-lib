import React from 'react'
import { StyleSheet } from 'react-native'

import { Ionicons } from '@expo/vector-icons';
const IconComponent = ({imageUrl, style}) => {
  return (
    <Image style={[styles.image, style]} source={imageUrl}/>
  )
}

export default IconComponent

const styles = StyleSheet.create({
    weight: 32,
    height: 32
})