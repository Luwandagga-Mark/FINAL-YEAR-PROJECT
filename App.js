import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import Guardian from './src/screens/Guardian';
import Services from './src/screens/Services';
import Others from './src/screens/OTHERS/Others';
import Accept from './src/screens/Accept/Accept';
import Denied from './src/screens/Denied/Denied';
import Fingerprint from './src/screens/Fingerprint/Fingerprint';


const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  },
});
export default App;