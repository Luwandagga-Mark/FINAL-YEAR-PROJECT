import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Custombutton from '../components/Custombutton';
import * as LocalAuthentication from 'expo-local-authentication';
import { getBioID } from '../../APIRequests/BiometricSignUp';
import FingerprintAuthentication from '../Fingerprint1/Fingerprint';
import { FingerprintRegister } from '../../APIRequests/ServicesApiRequests/RegisterBiometric';

const StdNo = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { studentNumber } = route.params;

    const onNextPressed = async () => {
        
       const loginSuccess = await FingerprintRegister(studentNumber)
       if (loginSuccess === true){
            Alert.alert('Success', 'Fingerprint authentication successful.');
        navigation.reset({
            index: 0,
            routes: [{ name: 'SignIn' }],
          });
       
       } else {
        Alert.alert('Failed', `${loginSuccess}`);
       }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Your student number is:</Text>
                <Text style={styles.studentNumber}>{studentNumber}</Text>
                <Text style={styles.prompt}>Use fingerprint authentication for more security</Text>
                <Custombutton
                    text="Click here to use your device registered biometrics for account access "
                    onPress={onNextPressed}
                    bgColor="green"
                />
                <Custombutton
                    text="Next"
                    onPress={() => navigation.navigate('SignIn')}
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
});

export default StdNo;