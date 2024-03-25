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
            <Text>MAKERERE UNIVERSITY E-SERVICES</Text>
            <Custominput placeholder="Enter Registration Number" value={registrationnumber} setValue={setRegistrationnumber} />
            <Custombutton
             text="Enter fingerprint" 
             onPress={onEnterfingerprintPressed} 
             />
            <Custombutton
             text="Problems With Thumb" 
             onPress={onProblemsWithThumbPressed} 
             type="TERTIARY"
             bgColor="black" 
             />
            <Custombutton
             text="Don't have an account? Create one" 
             onPress={onSignUpPressed} 
             bgColor = "green"
             fgColor= "white"
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
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default SignInScreen;
