import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Custombutton from '../components/Custombutton';
import * as LocalAuthentication from 'expo-local-authentication';
import axios from 'axios';

const StdNo = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { studentNumber, studentId } = route.params;

    const [pin_number, setPin] = useState('');

    const onNextPressed = async () => {
        if (pin_number.length === 6) {
            try {
                const response = await axios.post('http://172.20.10.6:8000/pin-model/', {
                    studentId, // Use the student ID here
                    pin_number,
                });

                const studData = {
                    pin_number,
                    studentId // Link to the created student
                };

                console.log('Guardian Data:', studData);

                if (response.status === 200 || response.status === 201) {
                    Alert.alert('Success', 'Your PIN and student number have been stored.');
                    navigation.navigate('SignIn');
                } else {
                    Alert.alert('Error', response.data.message || 'Failed to store data. Please try again.');
                }
            } catch (error) {
                console.error('Error storing data', error);
                Alert.alert('Error', 'Failed to store data. Please try again later.');
            }
        } else {
            Alert.alert('Error', 'Please enter a 6-digit PIN.');
        }
    };

    const onFingerprintPressed = async () => {
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();

        if (hasHardware && isEnrolled) {
            const result = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Authenticate with fingerprint',
            });

            if (result.success) {
                Alert.alert('Success', 'Fingerprint authentication successful.');
                navigation.navigate('Services');
            } else {
                Alert.alert('Failed', 'Fingerprint authentication failed. Please try again.');
            }
        } else {
            Alert.alert('Not supported', 'Fingerprint authentication is not supported on this device.');
        }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Your student number is:</Text>
                <Text style={styles.studentNumber}>{studentNumber}</Text>
                <Text style={styles.prompt}>For more security, use fingerprint authentication.</Text>
                <Custombutton
                    text="Use device Fingerprint"
                    onPress={onFingerprintPressed}
                    bgColor="green"
                />
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Set a 6-Digit PIN of your choice</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="PIN"
                        value={pin_number}
                        onChangeText={setPin}
                        keyboardType="numeric"
                        maxLength={6}
                        secureTextEntry
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
        padding: 50,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'red',
        margin: 20,
    },
    studentNumber: {
        fontSize: 24,
        color: 'black',
        margin: 20,
    },
    prompt: {
        fontSize: 18,
        color: 'black',
        margin: 20,
        textAlign: 'center',
    },
    inputContainer: {
        width: '100%',
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginVertical: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'white',
    },
});

export default StdNo;
