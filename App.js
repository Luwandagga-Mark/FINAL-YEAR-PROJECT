import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import Guardian from './src/screens/Guardian';
import Services from './src/screens/Services';
import Others from './src/screens/OTHERS/Others';
import Accept from './src/screens/Accept/Accept';
import Denied from './src/screens/Denied/Denied';
import AuthFinger from './src/screens/AuthFing/AuthFinger';
import Fingerprint from './src/screens/Fingerprint1/Fingerprint';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './src/screens/Student details/DetailsScreen';
import StdNo from './src/screens/Student/StdNo';
import axios from 'axios';
import Profile from './src/screens/Profile';
import OTPScreen from './src/screens/otp/otp';
import StudentNumberScreen from './src/screens/studentnumber/studentno';
import MedicalScreen from './src/screens/medical/medical';
import AccommodationScreen from './src/screens/accomodation/accomodation';
import BankingScreen from './src/screens/banking/banking';
import NewsBlog from './src/screens/Blog/blog';
import LoadingScreen from './src/loadingScreen';
import SpecificScreen from './src/screens/Specific/specific';
import Specificservices from './src/screens/specific_service/specific_services';
import Alumni from './src/screens/Alumni';
import Alumniservices from './src/screens/Alumniservices';

const Stack = createNativeStackNavigator();

const App = () => {
  //useEffect(); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <SafeAreaView style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="loading">
        <Stack.Screen name="loading" component={LoadingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}  />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Fingerprint" component={Fingerprint} />
          <Stack.Screen name="Guardian" component={Guardian} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="AuthFinger" component={AuthFinger} />
          <Stack.Screen name="StdNo" component={StdNo} />
          <Stack.Screen name="Services" component={Services} />
          <Stack.Screen name="Accept" component={Accept} />
          <Stack.Screen name="Denied" component={Denied} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="StudentNumberScreen" component={StudentNumberScreen} />
          <Stack.Screen name="OTPScreen" component={OTPScreen} />
          <Stack.Screen name="medical" component={MedicalScreen} />
          <Stack.Screen name="accomodation" component={AccommodationScreen} />
          <Stack.Screen name="banking" component={BankingScreen} />
          <Stack.Screen name="Blog" component={NewsBlog} />
          <Stack.Screen name="Others" component={Others} />
          <Stack.Screen name="specific" component={SpecificScreen} />
          <Stack.Screen name="specificservices" component={Specificservices} />
          <Stack.Screen name="alumni" component={Alumni} />
          <Stack.Screen name="alumniservices" component={Alumniservices} />
        </Stack.Navigator>
      </NavigationContainer>
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
