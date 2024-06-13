import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Custombutton from '../components/Custombutton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { verifyOTP } from '../../APIRequests/LoginWithOtp';
import { loginUserAPI } from '../../APIRequests/login';

const OTPScreen = () => {
    const [otp, setOtp] = useState('');
    const navigation = useNavigation();
    const route = useRoute();
    const { studentNumber } = route.params;

    useEffect(() => {
        sendOtp();
    }, []);

    const sendOtp = async () => {
        try {
            Alert.alert('Info', 'OTP has been sent to your email.');
        } catch (error) {
            console.error('Error sending OTP', error);
            Alert.alert('Error', 'Failed to send OTP. Please try again later.');
        }
    };

    const onVerifyPressed = async () => {
        try {
        
         const loginDetails =      await verifyOTP({
                studentNumber,
                otp,
            })
            const loginSuccess = await loginUserAPI(loginDetails["username"],loginDetails["password"])
            if (loginSuccess){
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Services' }],
                  });
            }
      
        } catch (error) {
            console.error('Error verifying OTP', error);
            Alert.alert('Error', 'Failed to verify OTP. Please try again later.');
        }
    };

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Enter OTP</Text>
            <Text style={styles.subtitle}>A one-time password has been sent to your email.</Text>
            <TextInput
                style={styles.input}
                placeholder="OTP"
                value={otp}
                onChangeText={setOtp}
                keyboardType="numeric"
            />
            <Custombutton text="Verify" onPress={onVerifyPressed} bgColor="green" />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        marginTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 20,
    },
});

export default OTPScreen;
