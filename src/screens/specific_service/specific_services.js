import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import Custombutton from '../components/Custombutton';
import { useNavigation, useRoute } from '@react-navigation/native';
import profileIcon from '../../assets/images/profile.webp'; 
import newsIcon from '../../assets/images/blp.png';

const Specificservices = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { studentNumber, collegeCode } = route.params;

    const handleServiceSelection = async (serviceName) => {
        // Logic for handling service selection can be added here
    };

    const renderButtons = () => {
        switch (collegeCode) {
            case 'A': // CAES
                return (
                    <>
                        <Text style={styles.collegeTitle}>College of Agricultural and Environmental Sciences (CAES)</Text>
                        <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />
                        <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />
                        <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />
                        <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />
                        <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />
                        <Custombutton text="MAIN LIBRARY" onPress={onLibraryPressed} bgColor="blue" />
                        <Custombutton text="LIBRARY" onPress={onLibraryPressed} bgColor="red" />
                        <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />
                        <Custombutton text="FOOD SCIENCE AND TECH LAB" onPress={onFoodPressed} bgColor="red" />
                        <Custombutton text="CAES LECTURE ROOMS" onPress={onFoodPressed} bgColor="red" />
                    </>
                );
            case 'B': // COBAMS
                return (
                    <>
                        <Text style={styles.collegeTitle}>College of Business and Management Sciences (COBAMS)</Text>
                        <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />
                        <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />
                        <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />
                        <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />
                        <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />
                        <Custombutton text="MAIN LIBRARY" onPress={onLibraryPressed} bgColor="red" />
                        <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />
                        <Custombutton text="COBAMS LECTURE ROOMS" onPress={onExaminationPressed} bgColor="red" />
                    </>
                );
            case 'C': // COCIS
                return (
                    <>
                        <Text style={styles.collegeTitle}>College of Computing and Information Sciences (COCIS)</Text>
                        <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />
                        <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />
                        <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />
                        <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />
                        <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />
                        <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />
                        <Custombutton text="COMPUTER LABS" onPress={onFoodPressed} bgColor="red" />
                    </>
                );
            case 'D': // CEES
                return (
                    <>
                        <Text style={styles.collegeTitle}>College of Education and External Studies (CEES)</Text>
                        <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />
                        <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />
                        <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />
                        <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />
                        <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />
                        <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />
                        <Custombutton text="CEES LECTURE ROOMS" onPress={onFoodPressed} bgColor="red" />
                        <Custombutton text="MAIN LIBRARY" onPress={onLibraryPressed} bgColor="blue" />
                    </>
                );
            case 'E': // CEDAT
                return (
                    <>
                        <Text style={styles.collegeTitle}>College of Engineering, Design, Art and Technology (CEDAT)</Text>
                        <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />
                        <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />
                        <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />
                        <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />
                        <Custombutton text="MAIN LIBRARY" onPress={onLibraryPressed} bgColor="red" />
                        <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />
                        <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />
                        <Custombutton text="ENGINEERING WORKSHOPS" onPress={onFoodPressed} bgColor="black" />
                    </>
                );
            case 'F': // CHS
                return (
                    <>
                        <Text style={styles.collegeTitle}>College of Health Sciences (CHS)</Text>
                        <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />
                        <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />
                        <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />
                        <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />
                        <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />
                        <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />
                        <Custombutton text="MEDICAL WARDS" onPress={onFoodPressed} bgColor="red" />
                    </>
                );
            case 'G': // CHUSS
                return (
                    <>
                        <Text style={styles.collegeTitle}>College of Humanities and Social Sciences (CHUSS)</Text>
                        <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />
                        <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />
                        <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />
                        <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />
                        <Custombutton text="MAIN LIBRARY" onPress={onLibraryPressed} bgColor="red" />
                        <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />
                        <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />
                        <Custombutton text="ART STUDIO ACCESS" onPress={onExaminationPressed} bgColor="black" />

                    </>
                );
            case 'H': // CONAS
                return (
                    <>
                        <Text style={styles.collegeTitle}>College of Natural Sciences (CONAS)</Text>
                        <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />
                        <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />
                        <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />
                        <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />
                        <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />
                        <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />
                        <Custombutton text="SWIMMING POOL" onPress={onFoodPressed} bgColor="red" />
                        <Custombutton text="CHEMISTRY LABS" onPress={onFoodPressed} bgColor="green" />
                        <Custombutton text="PHYSICS LAB" onPress={onFoodPressed} bgColor="black" />
                    </>
                );
            case 'I': // COVAB
                return (
                    <>
                        <Text style={styles.collegeTitle}>College of Veterinary Medicine, Animal Resources and Biosecurity (COVAB)</Text>
                        <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />
                        <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />
                        <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />
                        <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />
                        <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />
                        <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />
                        <Custombutton text="BIOMEDICAL LAB" onPress={onFoodPressed} bgColor="red" />
                        <Custombutton text="VETERINARY LAB" onPress={onFoodPressed} bgColor="green" />

                    </>
                );
            case 'J': // MUBS
                return (
                    <>
                        <Text style={styles.collegeTitle}>Makerere University Business School (MUBS)</Text>
                        <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />
                        <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />
                        <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />
                        <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />
                        <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />
                        <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />
                    </>
                );
            case 'K': // SOL
                return (
                    <>
                        <Text style={styles.collegeTitle}>School of Law (SOL)</Text>
                        <Custombutton text="LAW SCHOOL PREMISES" onPress={onFoodPressed} bgColor="black" />
                        <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />
                        <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />
                        <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />
                        <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />
                        <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />
                        <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />
                    </>
                );
            case 'L': // SHORT COURSES
                return (
                    <>
                        <Text style={styles.collegeTitle}>Short Courses/Visiting Students</Text>
                        <Custombutton text="MEDICAL" onPress={onMedicalPressed} bgColor="black" />
                        <Custombutton text="ACCOMODATION" onPress={onAccomodationPressed} bgColor="green" />
                        <Custombutton text="BANKING" onPress={onBankingPressed} bgColor="red" />
                        <Custombutton text="PARKING" onPress={onParkingPressed} bgColor="black" />
                        <Custombutton text="FOOD" onPress={onFoodPressed} bgColor="green" />
                        <Custombutton text="EXAMINATION" onPress={onExaminationPressed} bgColor="black" />
                    </>
                );
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
    collegeTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        marginVertical: 10,
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

export default Specificservices;
