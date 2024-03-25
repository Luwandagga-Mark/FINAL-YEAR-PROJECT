import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import logo from '../../assets/images/logo.png';
import Custominput from './components/Custominput';
import Custombutton from './components/Custombutton';


const SignInScreen = () => {
    const [registrationnumber, setRegistrationnumber] = useState('');

    const { height } = useWindowDimensions();

    const onEnterfingerprintPressed = () =>{
        console.warn('Enter Finger Print');
    }

    const onProblemsWithThumbPressed = () => {
        console.warn('ProblemsWithThumb');
    }
    const onSignUpPressed = () => {
        console.warn('Sign Up Pressed');
    }
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

            <Text style={styles.label1}>Having problems with thumb? </Text>
            <Custombutton
             text="Press here" 
             onPress={onProblemsWithThumbPressed} 
             type="TERTIARY"
             bgColor="black"
             />

            <Text style={styles.label1}>Don't have an account?</Text>
            <Custombutton
             text=" Create one" 
             onPress={onSignUpPressed} 
             bgColor = "green"
             fgColor= "white"
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
        alignItems: 'left',
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
