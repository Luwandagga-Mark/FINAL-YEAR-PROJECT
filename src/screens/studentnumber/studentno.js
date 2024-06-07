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
    const [pin_number, setPin] = useState('');
    const navigation = useNavigation();

    const validateStudentNumber = (number) => {
        const regex = /^\d{2}-\d{5}-[A-L]-(D|E)-(U|I)$/;
        return regex.test(number);
    };

    const validatePin = (pin_number) => {
        const regex = /^\d{6}$/; // Ensure the PIN is exactly 6 digits
        return regex.test(pin_number);
    };

    const extractCollegeCode = (number) => {
        return number.split('-')[2];
    };

    const onNextPressed = async () => {
        if (validateStudentNumber(studentNumber) && validatePin(pin_number)) {
            try {
                const response = await axios.get('http://172.20.10.6:8000/pin/', {
                    studentNumber,
                    pin_number,
                });

                if (response.status === 200 || response.status === 201) {
                    Alert.alert('Success', 'Your student number and PIN have been stored.');
                    const collegeCode = extractCollegeCode(studentNumber);
                    navigation.navigate('Services', { studentNumber, collegeCode });

                    const studentdata = {
                        studentNumber,
                        pin_number
                    };

                    console.log('Student data:', studentdata);
                } else {
                    Alert.alert('Error', response.data.message || 'Failed to store data. Please try again.');
                }
            } catch (error) {
                console.error('Error storing data', error);
                Alert.alert('Error', 'Failed to store data. Please try again later.');
            }
        } else {
            Alert.alert(
                'Invalid Input',
                'Please enter a valid student number in the format: XX-XXXXX-X-(D|E)-(U|I) and a 6-digit PIN.'
            );
        }
    };

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Enter Your Student Number and PIN</Text>
            <TextInput
                style={styles.input}
                placeholder="Student Number"
                value={studentNumber}
                onChangeText={setStudentNumber}
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                placeholder="PIN"
                value={pin_number}
                onChangeText={setPin}
                keyboardType="numeric"
                maxLength={6}
                secureTextEntry
            />
            <Custombutton text="Next" onPress={onNextPressed} bgColor="green" />
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
