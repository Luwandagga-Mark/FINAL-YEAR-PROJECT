import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Custombutton from '../components/Custombutton';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { signWithOTP } from '../../APIRequests/LoginWithOtp';

const StudentNumberScreen = () => {
    const [studentNumber, setStudentNumber] = useState('');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const navigation = useNavigation();

    const validateStudentNumber = (number) => {
        const regex = /^2\d-\d{5}-[A-L]-(D|E)-(U|I)$/;
        return regex.test(number);
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
const sendOtp = async () => {

}
    const onNextPressed = async () => {
       
        if ( validateStudentNumber(studentNumber) && validateEmail(email)) {
            try {
                await signWithOTP({
                    studentNumber,
                    email,
                })
                navigation.navigate('OTPScreen',{'studentNumber':studentNumber});
            } catch (error) {
                console.error('Error sending OTP', error);
                Alert.alert('Error', 'Failed to send OTP. Please try again later.');
            }
        } else {
            Alert.alert(
                'Invalid Input',
                'Please enter a valid student number in the format: XX-XXXXX-X-(D|E)-(U|I) and a valid email address.'
            );
        }
    };

    

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Enter Your Student Number and Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Student Number"
                value={studentNumber}
                onChangeText={setStudentNumber}
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            {otpSent && (
                <TextInput
                    style={styles.input}
                    placeholder="OTP"
                    value={otp}
                   // onChangeText={setOtp}
                    keyboardType="numeric"
                    maxLength={6}
                />
            )}
              <Custombutton text="Send OTP" onPress={onNextPressed} bgColor="green" />
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
    input: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 20,
    },
});

export default StudentNumberScreen;
