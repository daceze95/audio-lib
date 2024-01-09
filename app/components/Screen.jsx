import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
  },
});
