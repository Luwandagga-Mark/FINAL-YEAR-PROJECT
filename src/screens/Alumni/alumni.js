import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Custombutton from '../components/Custombutton';
import { useNavigation } from '@react-navigation/native';

const Alumni = () => {
    const [studentNumber, setStudentNumber] = useState('');
    const navigation = useNavigation();
    const currentYear = new Date().getFullYear();

    const validateStudentNumber = (number) => {
        const regex = /^\d{2}-\d{5}-[A-L]-(D|E)-(U|I)$/;
        return regex.test(number);
    };

    const extractYear = (number) => {
        const yearPart = number.split('-')[0];
        const year = parseInt('20' + yearPart, 10);
        return year;
    };

    const isAlumni = (year) => {
        const yearsDifference = Math.abs(currentYear - year);
        return yearsDifference >= 4;
    };

    const onProceedPressed = () => {
        if (validateStudentNumber(studentNumber)) {
            const year = extractYear(studentNumber);

            if (isAlumni(year)) {
                navigation.navigate('alumniservices', { studentNumber });
            } else {
                Alert.alert(
                    'Not Allowed',
                    'Access denied. Only alumni are allowed to proceed.'
                );
            }
        } else {
            Alert.alert(
                'Invalid Input',
                'Please enter a valid student number in the format: XX-XXXXX-X-(Day|Evening)-(U|I)'
            );
        }
    };

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Enter Your Student Number</Text>
            <TextInput
                style={styles.input}
                placeholder="Student Number"
                value={studentNumber}
                onChangeText={setStudentNumber}
                keyboardType="default"
            />
            <Custombutton text="Proceed" onPress={onProceedPressed} bgColor="green" />
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

export default Alumni;
