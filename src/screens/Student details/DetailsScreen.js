import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';
import Custominput from '../components/Custominput';
import Custombutton from '../components/Custombutton';
import { useNavigation } from '@react-navigation/native';
import { Picker } from "@react-native-picker/picker";
import axios from 'axios';

const DetailsScreen = () => {
    const [yearOfEntry, setYearOfEntry] = useState('');
    const [nationality, setNationality] = useState('');
    const [college, setCollege] = useState('');
    const [shift, setShift] = useState('');
    const [course, setCourse] = useState('');
    const [nationalIdNumber, setNationalIdNumber] = useState('');
    const [passportNumber, setPassportNumber] = useState('');
    const [alumni, setAlumni] = useState('');
    const navigation = useNavigation();

    const collegeCodes = {
        "CAES": "A",
        "COBAMS": "B",
        "COCIS": "C",
        "CEES": "D",
        "CEDAT": "E",
        "CHS": "F",
        "CHUS": "G",
        "CONAS": "H",
        "COVAB": "I",
        "MUBS": "J",
        "SOL": "K",
        'SHORT COURSE/VISITING STUDENT': 'L'
    };

    const courses = {
        "CAES": ["Agribusiness mgt", "Food science and tech", "Environmental Science","Human Nutrition", "Forestry", "Tourism and hospitality", "meteorology", "geographical science" ],
        "COBAMS": ["Business Administration", "BCOM", "Arts in Economics", "Development Economics", "Quantitative Economics", "Statistics" ],
        "COCIS": ["Computer Science", "Software Engineering", "Information Systems"],
        "CEES": ["Arts with Education", "Science with Education(Biological)", "Science with Education(Physical)", "Science with Education(Economical)", "Medical Education"],
        "CEDAT": ["Civil Engineering", "Electrical Engineering", "Architecture", "Land surveying", "Mechanical Engineering"],
        "CHS": ["Medicine", "Nursing", "Dentistry", "Environmental Health", "Biomedical Science", "Pharmacy"],
        "CHUS": ["Social Works", "Social Sciences", "Chinese and Asian Studies", "Music", "Drama and Film", "Community psychology", "organisational psychology", "Defense studies", "Ethics and human rights", "Journalism and communication"],
        "CONAS": ["Biological Sciences", "Physical Sciences", "Mathematics", "Chemical siences", "conservational biology", "Sports science", "Industrial chem", "Biotechnology", "Fisheries and Aquaculture"],
        "COVAB": ["Veterinary Medicine", "Animal Production", "Wildlife Health", "Biomedical Labarotary", "Industrial Livestock"],
        "MUBS": ["Business Administration", "Procurement", "Human Resource Management"],
        "SOL": ["Law", "Legal Studies"],
        'SHORT COURSE': ['Short courses', 'visitng students']
    };

    const generateStudentNumber = () => {
        const year = yearOfEntry.slice(-2); // Extract last two digits of the year
        const randomPart = Math.floor(10000 + Math.random() * 90000).toString().padStart(5, '0');
        const collegeCode = collegeCodes[college];
        const timeCode = shift;
        const nationalityCode = nationality === "Ugandan" ? "U" : "I";

        if (!year || !randomPart || !collegeCode || !timeCode || !nationalityCode) {
            Alert.alert("Error", "Please make sure all fields are filled in correctly.");
            return null;
        }

        return `${year}-${randomPart}-${collegeCode}-${timeCode}-${nationalityCode}`;
    };

    const onNextPressed = async () => {
        // Validate required fields
        if (!yearOfEntry || !nationality || !college || !shift || !course) {
            Alert.alert("Error", "Please fill in all required fields.");
            return;
        }

        // Generate student number
        const studentNumber = generateStudentNumber();

        // Prepare data to be sent to the backend
        const studentData = {
            yearOfEntry,
            nationality,
            college,
            shift,
            course,
            nationalIdNumber: nationality === "Ugandan" ? nationalIdNumber : null,
            passportNumber: nationality === "International" ? passportNumber : null,
            studentNumber,
        };

        try {
            // Make POST request to register the student
            const response = await axios.post('http://172.20.10.6:8000/student-details/', studentData);
            if (response.status === 200 || response.status === 201) {
                const { id, studentNumber } = response.data;
                console.log('Student registration successful:', response.data);
                // Navigate to StdNo screen with the student number and ID
                navigation.navigate('StdNo', { studentNumber, studentId: id });
            } else {
                Alert.alert('Error', response.data.message || 'Failed to register student.');
            }
        } catch (error) {
            console.error('Error registering student:', error);
            Alert.alert('Error', 'Failed to register student. Please try again later.');
        }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Student Details</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Enter Year of Entry</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="e.g. 2023"
                        keyboardType="numeric"
                        value={yearOfEntry}
                        onChangeText={setYearOfEntry}
                        maxLength={4}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Choose Nationality</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={nationality}
                        onValueChange={(itemValue) => setNationality(itemValue)}
                    >
                        <Picker.Item label="Select Nationality" value="" />
                        <Picker.Item label="Ugandan" value="Ugandan" />
                        <Picker.Item label="International" value="International" />
                    </Picker>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Please choose your college</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={college}
                        onValueChange={(itemValue) => {
                            setCollege(itemValue);
                            setCourse(''); // Reset course when college changes
                        }}
                    >
                        <Picker.Item label="Select College/Short Course" value="" />
                        {Object.keys(collegeCodes).map((collegeName) => (
                            <Picker.Item key={collegeName} label={collegeName} value={collegeName} />
                        ))}
                    </Picker>
                </View>

                {college && (
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Choose Course</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={course}
                            onValueChange={(itemValue) => setCourse(itemValue)}
                        >
                            <Picker.Item label="Select Course" value="" />
                            {courses[college].map((courseName) => (
                                <Picker.Item key={courseName} label={courseName} value={courseName} />
                            ))}
                        </Picker>
                    </View>
                )}

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Choose Time Of Study</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={shift}
                        onValueChange={(itemValue) => setShift(itemValue)}
                    >
                        <Picker.Item label="Select" value="" />
                        <Picker.Item label="Day" value="D" />
                        <Picker.Item label="Evening" value="E" />
                    </Picker>
                </View>

                {nationality === "Ugandan" && (
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Fill in your NIN</Text>
                        <Custominput
                            value={nationalIdNumber}
                            setValue={setNationalIdNumber}
                        />
                    </View>
                )}

                {nationality === "International" && (
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Please fill in your passport number</Text>
                        <Custominput
                            value={passportNumber}
                            setValue={setPassportNumber}
                        />
                    </View>
                )}

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
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green',
        margin: 30,
    },
    inputContainer: {
        width: '90%',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: 'black',
        marginBottom: 5,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
    },
    picker: {
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#fafafa',
    },
});

export default DetailsScreen;
