import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import Custominput from '../components/Custominput';
import Custombutton from '../components/Custombutton';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const SignUpScreen = () => {
    const [surname, setSurname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [telephonenumber, setTelephonenumber] = useState('');
    const [gender, setGender] = useState('');
    const [dateofbirth, setDateofbirth] = useState('');

    const navigation = useNavigation();

    const calculateAge = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const onNextPressed = async () => {
        // Form validation
        if (!surname || !firstname || !email || !telephonenumber || !gender || !dateofbirth) {
            Alert.alert('Error', 'Please fill in all the required fields.');
            return;
        }

        // Validate date format (simple check for MM-DD-YYYY)
        const datePattern = /^\d{2}-\d{2}-\d{4}$/;
        if (!datePattern.test(dateofbirth)) {
            Alert.alert('Error', 'Please enter the date of birth in the format MM-DD-YYYY.');
            return;
        }

        // Convert date to YYYY-MM-DD format
        const [month, day, year] = dateofbirth.split('-');
        const formattedDate = `${year}-${month}-${day}`;

        const age = calculateAge(formattedDate);
        if (age < 18) {
            Alert.alert('Error', 'You must be at least 18 years old to register.');
            return;
        }

        // Form data object
        const formData = {
            surname,
            firstname,
            email,
            telephonenumber,
            gender,
            dateofbirth: formattedDate, // Use formatted date
        };

        console.log('Form Data:', formData);

        try {
            // Send data to the backend
        
        } catch (error) {
            console.error('Error registering user', error);
            Alert.alert('Error', 'Failed to register. Please try again later.');
        }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>CREATE AN ACCOUNT</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label1}>PLEASE FILL IN YOUR BIO DATA</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Surname</Text>
                    <Custominput value={surname} setValue={setSurname} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>First Name</Text>
                    <Custominput value={firstname} setValue={setFirstname} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>E-mail</Text>
                    <Custominput value={email} setValue={setEmail} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Telephone Number</Text>
                    <Custominput value={telephonenumber} setValue={setTelephonenumber} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Gender</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={gender}
                        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                    >
                        <Picker.Item label="Select Gender" value="" />
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                        <Picker.Item label="Others" value="Others" />
                    </Picker>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Date Of Birth (MM-DD-YYYY)</Text>
                    <Custominput
                        value={dateofbirth}
                        setValue={setDateofbirth}
                        placeholder="MM-DD-YYYY"
                        keyboardType="numeric"
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
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'green',
        marginVertical: 30,
        marginStart: 5,
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
    label1: {
        fontSize: 18,
        color: 'red',
        marginBottom: 5,
    },
    picker: {
        height: 50,
        backgroundColor: '#fafafa',
    },
});

export default SignUpScreen;
