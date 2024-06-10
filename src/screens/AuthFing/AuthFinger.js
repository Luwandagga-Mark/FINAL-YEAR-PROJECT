import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as LocalAuthentication from 'expo-local-authentication';
import { useNavigation } from '@react-navigation/native'; 

const FingerprintRegistration = () => {
    const [registrationMessage, setRegistrationMessage] = useState('');
    const navigation = useNavigation(); 

    const handleFingerprintRegistration = async () => {
        const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
         
        if (!isBiometricAvailable)
            return Alert.alert(
                'Biometric Auth not Supported',
                'Please Enter OTP'
            );

        const registerResult = await LocalAuthentication.enrollBiometricAsync({
            promptMessage: 'Register your Fingerprint',
        });

        if (registerResult.success) {
            setRegistrationMessage('Fingerprint registered successfully');
            navigation.navigate('StdNo');
        } else {
            setRegistrationMessage('Fingerprint registration failed');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Register Your Fingerprint</Text>
                <Pressable onPress={handleFingerprintRegistration}>
                    <Ionicons name="finger-print-outline" size={100} color="black" />
                </Pressable>
                <Text style={styles.message}>{registrationMessage}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    message: {
        marginTop: 20,
        textAlign: 'center',
    },
});

export default FingerprintRegistration;
