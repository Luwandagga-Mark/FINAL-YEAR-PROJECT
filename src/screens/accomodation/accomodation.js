import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import Custombutton from '../components/Custombutton';
import { useNavigation } from '@react-navigation/native';

const AccommodationScreen = () => {
    const navigation = useNavigation();
    const [selection, setSelection] = useState(null);
    const [region, setRegion] = useState(null);
    const [gender, setGender] = useState(null);

    const hostels = {
        Kikoni: ['Frama', 'Sunways', 'Baskon', 'Kann', 'Kare', 'Apex'],
        Wandegeya: ['JB Hostel', 'Aryan', 'Braetd hostel'],
        KK: ['Hostel 7', 'Hostel 8', 'Hostel 9']
    };

    const halls = {
        Male: ['Mitchell', 'University Hall', 'Livingstone', 'Nsibirwa', 'Nkuruma'],
        Female: ['Marystuart', 'Complex', 'Africa']
    };

    const renderHostelRegions = () => (
        <View style={styles.buttonContainer}>
            <Text style={styles.subtitle}>Select Region</Text>
            {Object.keys(hostels).map((region) => (
                <Custombutton
                    key={region}
                    text={region}
                    onPress={() => setRegion(region)}
                    bgColor="red"
                />
            ))}
        </View>
    );

    const renderHostels = () => (
        <View style={styles.buttonContainer}>
            <Text style={styles.subtitle}>Select Hostel in {region}</Text>
            {hostels[region].map((hostel) => (
                <Custombutton
                    key={hostel}
                    text={hostel}
                    onPress={() => Alert.alert('Selected', `You selected ${hostel}`)}
                    bgColor="green"
                />
            ))}
        </View>
    );

    const renderGenderSelection = () => (
        <View style={styles.buttonContainer}>
            <Text style={styles.subtitle}>Select Gender</Text>
            <Custombutton
                text="Male"
                onPress={() => setGender('Male')}
                bgColor="green"
            />
            <Custombutton
                text="Female"
                onPress={() => setGender('Female')}
                bgColor="red"
            />
        </View>
    );

    const renderHalls = () => (
        <View style={styles.buttonContainer}>
            <Text style={styles.subtitle}>Select Hall</Text>
            {halls[gender].map((hall) => (
                <Custombutton
                    key={hall}
                    text={hall}
                    onPress={() => Alert.alert('Selected', `You selected ${hall}`)}
                    bgColor="red"
                />
            ))}
        </View>
    );

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Accommodation Services</Text>

                {!selection && (
                    <View style={styles.buttonContainer}>
                        <Custombutton
                            text="Hostels"
                            onPress={() => setSelection('Hostels')}
                            bgColor="green"
                        />
                        <Custombutton
                            text="Halls"
                            onPress={() => setSelection('Halls')}
                            bgColor="red"
                        />
                    </View>
                )}

                {selection === 'Hostels' && !region && renderHostelRegions()}
                {selection === 'Hostels' && region && renderHostels()}

                {selection === 'Halls' && !gender && renderGenderSelection()}
                {selection === 'Halls' && gender && renderHalls()}
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
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
        marginVertical: 20,
    },
    buttonContainer: {
        flexDirection: 'r',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
});

export default AccommodationScreen;
