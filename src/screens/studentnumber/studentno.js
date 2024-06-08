import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Custombutton from '../components/Custombutton';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const collegeCodes = {
    "CAES": "A",
    "COBAMS": "B",
    "COCIS": "C",
    "CEES": "D",
    "CEDAT": "E",
    "CHS": "F",
    "CHUS": "G",
    "CONAS": "H",
    "COVAB": "I",
    "MUBS": "J",
    "SOL": "K",
    'SHORT COURSE/VISITING STUDENT': 'L'
};

const StudentNumberScreen = () => {
    const [studentNumber, setStudentNumber] = useState('');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const navigation = useNavigation();

    const validateStudentNumber = (number) => {
        const regex = /^\d{2}-\d{5}-[A-L]-(D|E)-(U|I)$/;
        return regex.test(number);
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validateOtp = (otp) => {
        const regex = /^\d{6}$/; // Ensure the OTP is exactly 6 digits
        return regex.test(otp);
    };

    const extractCollegeCode = (number) => {
        return number.split('-')[2];
    };

    const sendOtp = async () => {
        if (validateStudentNumber(studentNumber) && validateEmail(email)) {
            try {
                const response = await axios.post('https://your-api-endpoint.com/send-otp', {
                    studentNumber,
                    email,
                });

                if (response.data.success) {
                    Alert.alert('OTP Sent', `An OTP has been sent to ${email}`);
                    setOtpSent(true);
                } else {
                    Alert.alert('Error', response.data.message || 'Failed to send OTP. Please try again.');
                }
            } catch (error) {
                console.error('Error sending OTP', error);
                Alert.alert('Error', 'Failed to send OTP. Please try again later.');
            }
        } else {
            Alert.alert(
                'Invalid Input',
                'Please enter a valid student number in the format: XX-XXXXX-X-(Day|Evening)-(U|I) and a valid email address.'
            );
        }
    };

    const onVerifyPressed = async () => {
        if (validateOtp(otp)) {
            try {
                const response = await axios.post('https://your-api-endpoint.com/verify-otp', {
                    studentNumber,
                    email,
                    otp,
                });

                if (response.data.success) {
                    Alert.alert('Success', 'Your OTP has been verified.');
                    const collegeCode = extractCollegeCode(studentNumber);
                    navigation.navigate('Services', { studentNumber, collegeCode });
                } else {
                    Alert.alert('Error', response.data.message || 'Failed to verify OTP. Please try again.');
                }
            } catch (error) {
                console.error('Error verifying OTP', error);
                Alert.alert('Error', 'Failed to verify OTP. Please try again later.');
            }
        } else {
            Alert.alert(
                'Invalid OTP',
                'Please enter a valid 6-digit OTP.'
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
                    onChangeText={setOtp}
                    keyboardType="numeric"
                    maxLength={6}
                />
            )}
            {!otpSent ? (
                <Custombutton text="Send OTP" onPress={sendOtp} bgColor="green" />
            ) : (
                <Custombutton text="Verify OTP" onPress={onVerifyPressed} bgColor="green" />
            )}
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
