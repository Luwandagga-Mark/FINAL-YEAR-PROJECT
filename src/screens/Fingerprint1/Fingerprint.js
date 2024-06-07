import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as LocalAuthentication from 'expo-local-authentication';
import { useNavigation } from '@react-navigation/native';

const FingerprintAuthentication = () => {
    const [authenticationMessage, setAuthenticationMessage] = useState('');
    const navigation = useNavigation(); // Use the useNavigation hook to access navigation

    const handleFingerprintAuthentication = async () => {
        const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

        if (!isBiometricAvailable) {
            return Alert.alert('Biometric Auth not Supported', 'Please Enter OTP');
        }

        const enrolled = await LocalAuthentication.isEnrolledAsync();
        if (!enrolled) {
            return Alert.alert('No Biometric Enrollment', 'Please set up biometric authentication in your device settings.');
        }

        const biometricAuth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Login With Biometrics',
            cancelLabel: 'Cancel',
            disableDeviceFallback: true,
        });

        if (biometricAuth.success) {
            setAuthenticationMessage('Fingerprint authentication successful');
            navigation.navigate('RegNo'); // Navigate to "RegNo" upon successful authentication
        } else {
            setAuthenticationMessage('Fingerprint authentication failed');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Authenticate with Your Fingerprint</Text>
                <Pressable onPress={handleFingerprintAuthentication}>
                    <Ionicons name="finger-print-outline" size={100} color="black" />
                </Pressable>
                <Text style={styles.message}>{authenticationMessage}</Text>
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

export default FingerprintAuthentication;
