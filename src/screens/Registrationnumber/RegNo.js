import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import Custominput from '../components/Custominput';
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

const RegNo = () => {
    const [registrationNumber, setRegistrationNumber] = useState(''); 
    const navigation = useNavigation();   

    const validateStudentNumber = (number) => {
        const regex = /^\d{2}-\d{5}-[A-L]-(D|E)-(U|I)$/;
        return regex.test(number);
    };

    const extractCollegeCode = (number) => {
        return number.split('-')[2];
    };

    const onNextPressed = async () => {
        if (validateStudentNumber(registrationNumber)) {
            try {
                const response = await axios.get('http://172.20.10.6:8000/pin/', {
                    studentNumber: registrationNumber,
                });

                if (response.data.valid) {
                    const collegeCode = extractCollegeCode(registrationNumber);
                    navigation.navigate('Services', { studentNumber: registrationNumber, collegeCode });
                } else {
                    Alert.alert('Invalid Number', 'This registration number is not in our database. Please check and try again.');
                }
            } catch (error) {
                console.error('Error validating student number', error);
                Alert.alert('Error', 'An error occurred while validating the student number. Please try again later.');
            }
        } else {
            Alert.alert('Invalid Number', 'This registration number is wrong. Please check and try again.');
        }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Enter Student Number</Text>
                    <Custominput
                        value={registrationNumber}
                        setValue={setRegistrationNumber}
                    />
                </View>                
                
                <Custombutton
                    text="Next"
                    onPress={onNextPressed}
                    bgColor="red"
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
    inputContainer: {
        width: '90%',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: 'black',
        marginBottom: 5,
    },
});

export default RegNo;
