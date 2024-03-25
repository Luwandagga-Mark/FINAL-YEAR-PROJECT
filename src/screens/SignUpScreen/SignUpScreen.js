import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Custominput from '../components/Custominput';
import Custombutton from '../components/Custombutton';

const SignUpScreen = () => {
    const [surname, setSurname] = useState('');
    const [othernames, setOthernames] = useState('');
    const [email, setEmail] = useState('');
    const [telephonenumber, setTelephonenumber] = useState('');
    const [gender, setGender] = useState('');
    const [dateofbirth, setDateofbirth] = useState('');
    const [religion, setReligion] = useState('');
    const [homedistrict, setHomedistrict] = useState('');
    const [nationality, setNationality] = useState('');
    const [nationalidnumber, setNationalidnumber] = useState('');
    const [passportnumber, setPassportnumber] = useState('');

    const onNextPressed = () => {
        console.warn('Next');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>CREATE AN ACCOUNT</Text>

                <View style={styles.inputContainer}>
                <Text style={styles.label1}>PLEASE FILL IN YOUR BIO DATA</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Surname</Text>
                    <Custominput
                        value={surname}
                        setValue={setSurname}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Other Names</Text>
                    <Custominput
                        value={othernames}
                        setValue={setOthernames}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>E-mail</Text>
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
                    <Text style={styles.label}>gender</Text>
                    <Custominput value={gender} setValue={setGender} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Date Of Birth</Text>
                    <Custominput
                        value={dateofbirth}
                        setValue={setDateofbirth}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Religion</Text>
                    <Custominput
                        value={religion}
                        setValue={setReligion}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Home District</Text>
                    <Custominput
                        value={homedistrict}
                        setValue={setHomedistrict}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nationality</Text>
                    <Custominput
                        value={nationality}
                        setValue={setNationality}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>National Id Number</Text>
                    <Custominput
                        value={nationalidnumber}
                        setValue={setNationalidnumber}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Passport Number</Text>
                    <Custominput
                        placeholder="passportnumber"
                        value={passportnumber}
                        setValue={setPassportnumber}
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
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'green',
        marginVertical: 30,
        marginStart : 5,
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
    label1: {
        fontSize: 18,
        color: 'red',
        marginBottom: 5,
    },
});

export default SignUpScreen;
