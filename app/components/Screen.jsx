import {Platform, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native'

const Screen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  )
}

export default Screen


const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingHorizontal: 10
    }
})