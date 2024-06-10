import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Button } from 'react-native';
import logo from '../../assets/images/logo.png';
import Custombutton from './components/Custombutton';
import { useNavigation } from '@react-navigation/native'; 
//import { loginUser } from '../APIRequests/login';
//import DeviceInfo from 'react-native-device-info';
import Constants from 'expo-constants';
import { getBioID } from '../APIRequests/BiometricSignUp';
import { refreshTokenAPI } from '../APIRequests/http';


const SignInScreen = () => {
   

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onEnterfingerprintPressed = async() => {
      
        navigation.navigate('Fingerprint');// undefined-55.2.A.4.332
    };

    const onProblemsWithThumbPressed = async() => {
        navigation.navigate('StudentNumberScreen');
    };

    const onSignUpPressed =async () => {
       navigation.navigate('SignUp');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
                
                <Text style={styles.label}>MAKERERE UNIVERSITY E-SERVICES</Text>

                <Text style={styles.label1}>Already registered? </Text>
                <Custombutton
                    text="Enter fingerprint" 
                    onPress={onEnterfingerprintPressed}
                />

                <Text style={styles.label1}>Having fingerprint issues? </Text>
                <Custombutton
                    text="Login without fingerprint" 
                    onPress={onProblemsWithThumbPressed} 
                    type="TERTIARY"
                    bgColor="black"
                />

                <Text style={styles.label1}>Don't have an account?</Text>
                <Custombutton
                    text=" Create one" 
                    onPress={onSignUpPressed} 
                    bgColor="green"
                    fgColor="white"
                    style={{ marginBottom: 30 }}
                />
            </View>
        </ScrollView>
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

export default SignInScreen;
