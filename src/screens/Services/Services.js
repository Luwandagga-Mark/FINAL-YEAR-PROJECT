import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import Custombutton from '../components/Custombutton';
import { useNavigation, useRoute } from '@react-navigation/native';
import profileIcon from '../../assets/images/profile.webp'; 
import newsIcon from '../../assets/images/blp.png';
import axios from 'axios';

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
                    <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />,
                    <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />,
                    <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />,
                    <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />,
                    <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />,
                    <Custombutton text="LIBRARY" onPress={onLibraryPressed} bgColor="red" />,
                    <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />,
        ];
            case 'B': // COBAMS
                return [
                    <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />,
                    <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />,
                    <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />,
                    <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />,
                    <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />,
                    <Custombutton text="LIBRARY" onPress={onLibraryPressed} bgColor="red" />,
                    <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />,
                ];
            case 'C': // COCIS
                return [
                    <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />,
                    <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />,
                    <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />,
                    <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />,
                    <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />,
                    <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />,
                ];
            
            case 'D': // CEES
                return [
                    <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />,
                    <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />,
                    <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />,
                    <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />,
                    <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />,
                    <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />,
                ];
            case 'E': // CEDAT
                return [
                    <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />,
                    <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />,
                    <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />,
                    <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />,
                    <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />,
                    <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />,
                ];
            case 'F': // CHS
                return [
                    <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />,
                    <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />,
                    <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />,
                    <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />,
                    <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />,
                    <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />,
                ];
            case 'G': // CHUSS
                return [
                    <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />,
                    <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />,
                    <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />,
                    <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />,
                    <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />,
                    <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />,
                ];
            case 'H': // CONAS
                return [
                    <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />,
                    <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />,
                    <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />,
                    <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />,
                    <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />,
                    <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />,
                ];
            case 'I': // COVAB
                return [
                    <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />,
                    <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />,
                    <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />,
                    <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />,
                    <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />,
                    <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />,
                ];
            case 'J': // MUBS
                return [
                    <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />,
                    <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />,
                    <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />,
                    <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />,
                    <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />,
                    <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />,
                ];
            case 'J': // SOL
                return [
                    <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />,
                    <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />,
                    <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />,
                    <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />,
                    <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />,
                    <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />,
                ];
            case 'L': // SHORT COURSES
                return [
                    <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />,
                    <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />,
                    <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />,
                    <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />,
                    <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />,
                    <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />,
                ];
            // Add more cases for each college code
            default:
                return (
                    <Text>No services available for your college.</Text>
                );
        }
    };

    const onMedicalPressed = () => {
        handleServiceSelection('medical');
        navigation.navigate('medical');
    };

    const onAccomodationPressed = () => {
        handleServiceSelection('accomodation');
        navigation.navigate('accomodation');
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

    const onExaminationPressed = () => {
        handleServiceSelection('examination');
        navigation.navigate('Accept');
    };

    const onLibraryPressed = () => {
        handleServiceSelection('library');
        navigation.navigate('Accept');
    };

    const onInternetPressed = () => {
        handleServiceSelection('internet');
        navigation.navigate('Accept');
    };

    const onOtherPressed = () => {
        handleServiceSelection('other');
        navigation.navigate('Denied');
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
