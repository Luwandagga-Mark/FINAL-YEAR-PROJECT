// screens/LoadingScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import logo from '../assets/images/logo.png';
import { refreshTokenAPI } from './APIRequests/http';

const LoadingScreen = ({ navigation }) => {
    const { height } = useWindowDimensions();
  useEffect(() => {
    const checkApi = async () => {
      try {
        await refreshTokenAPI()
        navigation.replace('Services');
      } catch (error) {
        navigation.replace('SignIn'); // Navigate to ErrorScreen on error
      }
    };

    checkApi();
  }, [navigation]);

  return (
    <View style={styles.root}>
     <Image source={logo} style={[styles.logo, { height: height * 0.5 }]} resizeMode="contain" />
                
                <Text style={styles.label}>MAKERERE UNIVERSITY E-SERVICES</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    root: {
        
        alignItems: 'center',
        padding: 20,
    },
    label: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    },
    label1: {
        alignItems: 'center',
        fontSize: 18,
        color: 'red',
        marginBottom: 5,
    },
    logo: {
        width: '90%',
        maxWidth: 400,
        maxHeight: 600,
    },
});

export default LoadingScreen;
