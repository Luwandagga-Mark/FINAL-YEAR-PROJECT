import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Custombutton from '../components/Custombutton';
import { useNavigation } from '@react-navigation/native';

const MedicalScreen = () => {
    const [isFirstTime, setIsFirstTime] = useState(null);
    const navigation = useNavigation();

    const medicalServices = [
        { name: 'Eye Checking', time: '9am - 11am' },
        { name: 'General Consultation', time: '11am - 1pm' },
        { name: 'Dental Checkup', time: '1pm - 3pm' },
        { name: 'Physiotherapy', time: '3pm - 5pm' },
    ];

    const handleServicePress = (service) => {
        Alert.alert('Service Selected', `You have selected: ${service.name} at ${service.time}`);
        // Here you would also update the user's calendar with the selected service
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Welcome to University Hospital</Text>

                <Text style={styles.question}>Is this your first time here?</Text>
                <View style={styles.buttonContainer}>
                    <Custombutton text="Yes" onPress={() => setIsFirstTime(true)} bgColor="green" />
                    <Custombutton text="No" onPress={() => setIsFirstTime(false)} bgColor="red" />
                </View>

                {isFirstTime !== null && (
                    <View style={styles.servicesContainer}>
                        <Text style={styles.subtitle}>Available Medical Services</Text>
                        {medicalServices.map((service, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.serviceButton}
                                onPress={() => handleServicePress(service)}
                            >
                                <Text style={styles.serviceText}>{service.name}</Text>
                                <Text style={styles.serviceTime}>{service.time}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
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
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green',
        marginVertical: 30,
    },
    question: {
        fontSize: 18,
        color: 'black',
        marginBottom: 20,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'r',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    servicesContainer: {
        width: '100%',
        marginTop: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
        marginBottom: 10,
        textAlign: 'center',
    },
    serviceButton: {
        backgroundColor: '#fafafa',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        alignItems: 'center',
    },
    serviceText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    serviceTime: {
        fontSize: 14,
        color: 'gray',
    },
});

export default MedicalScreen;
