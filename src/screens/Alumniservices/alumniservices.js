import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import Custombutton from '../components/Custombutton';
import { useNavigation, useRoute } from '@react-navigation/native';
import profileIcon from '../../assets/images/profile.webp'; 
import newsIcon from '../../assets/images/blp.png';


const Alumniservices = () => {
    const navigation = useNavigation();
    const route = useRoute();
    
const [studentNumber,setStudentNumber] =useState();
const [collegeCode,setCollegeCode] =useState('A');
    const handleServiceSelection = async (serviceName) => {
        
    };

    const renderButtons = () => {
        switch (collegeCode) {
            case 'A': // CAES
                return [
                    <Custombutton text="TESTIMONIALS" onPress={onMedicalPressed} bgColor="black" />,
                    <Custombutton text="TRANSCRIPTS" onPress={onAccomodationPressed} bgColor="green" />,
                    <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />,
        ];
            
            default:
                return (
                    <Text>No services available for your college.</Text>
                );
        }
    };

    const onMedicalPressed = () => {
        handleServiceSelection('accept');
        navigation.navigate('Accept');
    };

    const onAccomodationPressed = () => {
        handleServiceSelection('accept');
        navigation.navigate('Accept');
    };


    const onParkingPressed = () => {
        handleServiceSelection('parking');
        navigation.navigate('Accept');
    };



    const onProfilePressed = () => {
        navigation.navigate('Profile');
    };

    const onNewsPressed = () => {
        navigation.navigate('Blog');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onNewsPressed}>
                    <Image 
                        source={newsIcon} 
                        style={styles.newsIcon} 
                    />
                </TouchableOpacity>
                <Text style={styles.title}>MUK E-SERVICES</Text>
                <TouchableOpacity onPress={onProfilePressed}>
                    <Image 
                        source={profileIcon} 
                        style={styles.profileIcon} 
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.root}>
                <Text style={styles.subtitle}>Your Services</Text>
                {renderButtons()}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
        margin: 10,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
        margin: 10,
    },
    profileIcon: {
        width: 30,
        height: 30,
    },
    newsIcon: {
        width: 30,
        height: 30,
    },
});

export default Alumniservices;
