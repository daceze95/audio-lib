import {
  StyleSheet,
  View,
  Image
} from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/splash.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
