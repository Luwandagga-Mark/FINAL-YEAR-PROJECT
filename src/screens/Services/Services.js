import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import Custombutton from '../components/Custombutton';
import { useNavigation, useRoute } from '@react-navigation/native';
import profileIcon from '../../assets/images/profile.webp'; 
import newsIcon from '../../assets/images/blp.png';


const Services = () => {
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
                    <Custombutton text="SPECIFIC SERVICES" onPress={onSpecificPressed} bgColor="blue" />,
                    <Custombutton text="UNIVERSITY GATES" onPress={onGatesPressed} bgColor="black" />,
                    <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />,
                    <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />,
                    <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />,
                    <Custombutton text="INTERNET" onPress={onInternetPressed} bgColor="black" />,
                    <Custombutton text="UNIVERSITY PREMISES" onPress={onPremisesPressed} bgColor="black" />,
                    <Custombutton text="ALUMNI SERVICES" onPress={onAlumniPressed} bgColor="blue" />,
        ];
            
            default:
                return (
                    <Text>No services available for your college.</Text>
                );
        }
    };

    const onGatesPressed = () => {
        handleServiceSelection('gate');
        navigation.navigate('Accept');
    };

    const onInternetPressed = () => {
        handleServiceSelection('internet');
        navigation.navigate('Accept');
    };


    const onBankingPressed = () => {
        handleServiceSelection('banking');
        navigation.navigate('banking');
    };

    const onParkingPressed = () => {
        handleServiceSelection('parking');
        navigation.navigate('Accept');
    };

    const onFoodPressed = () => {
        handleServiceSelection('food');
        navigation.navigate('Accept');
    };

    const onPremisesPressed = () => {
        handleServiceSelection('premises');
        navigation.navigate('Accept');
    };

    const onAlumniPressed = () => {
        handleServiceSelection('alumni');
        navigation.navigate('alumni');
    };

    const onSpecificPressed = () => {
        handleServiceSelection('specific');
        navigation.navigate('specific');
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
                <Text style={styles.title}>WELCOME TO MUK E-SERVICES</Text>
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

export default Services;
