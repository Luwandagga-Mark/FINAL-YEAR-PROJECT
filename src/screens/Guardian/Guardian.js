import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import Custominput from '../components/Custominput';
import Custombutton from '../components/Custombutton';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

const Guardian = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [telephonenumber, setTelephonenumber] = useState('');
    const [relationship, setRelationship] = useState('');
    const [address, setAddress] = useState('');
    const navigation = useNavigation();
    const route = useRoute();

    const onNextPressed = async () => {
        if (!fullname || !email || !telephonenumber || !relationship || !address) {
            Alert.alert("Error", "Please fill in all fields.");
            return;
        }

        // Retrieve formData from the previous screen
        const formData = route.params;

        console.log('Form Data:', formData);

        try {
            // Send student data to the backend and get the student ID
            const studentResponse = await axios.post('http://172.20.10.6:8000/students/', formData);

            if (studentResponse.status === 200 || studentResponse.status === 201) {
                const studentId = studentResponse.data.id;

                // Prepare guardian details with the linked student ID
                const guardianData = {
                    fullname,
                    email,
                    telephonenumber,
                    relationship,
                    address,
                    student: studentId // Link to the created student
                };

                console.log('Guardian Data:', guardianData);

                // Send guardian data to the backend
                const guardianResponse = await axios.post('http://172.20.10.6:8000/guardians/', guardianData);

                if (guardianResponse.status === 200 || guardianResponse.status === 201) {
                    console.log('Guardian registration successful:', guardianResponse.data);
                    // Navigate to the next screen
                    navigation.navigate('Details', formData);
                } else {
                    Alert.alert('Error', guardianResponse.data.message || 'Failed to register guardian.');
                }
            } else {
                Alert.alert('Error', studentResponse.data.message || 'Failed to register student.');
            }
        } catch (error) {
            if (error.response) {
                console.error('Error response data:', error.response.data);
                Alert.alert('Error', error.response.data.message || 'Failed to register.');
            } else {
                console.error('Error registering user', error);
                Alert.alert('Error', 'Failed to register. Please try again later.');
            }
        }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Guardian Details</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Full Name</Text>
                    <Custominput 
                        value={fullname} 
                        setValue={setFullname} 
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <Custominput 
                        value={email} 
                        setValue={setEmail} 
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Telephone Number</Text>
                    <Custominput
                        value={telephonenumber} 
                        setValue={setTelephonenumber} 
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Relationship</Text>
                    <Custominput
                        value={relationship} 
                        setValue={setRelationship} 
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Address</Text>
                    <Custominput
                        value={address} 
                        setValue={setAddress} 
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
        alignItems: 'stretch',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green',
        margin: 30,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: 'black',
        marginBottom: 5,
    },
});

export default Guardian;
