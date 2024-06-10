import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';
import Custombutton from '../components/Custombutton';
import { Picker } from '@react-native-picker/picker';

const BankingScreen = () => {
    const [studentType, setStudentType] = useState('');
    const [feeType, setFeeType] = useState('');
    const [amount, setAmount] = useState('');
    const [bank, setBank] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [hasRetake, setHasRetake] = useState('');
    const [retakeAmount, setRetakeAmount] = useState('');

    const banks = ['Bank A', 'Bank B', 'Bank C', 'Bank D'];

    const onSave = () => {
        if (!amount || !bank || !accountNumber) {
            Alert.alert('Error', 'Please fill in all required fields.');
            return;
        }

        let paymentDetails = `Amount: ${amount}, Bank: ${bank}, Account Number: ${accountNumber}`;
        if (feeType === 'Other Fees' && hasRetake === 'Yes') {
            paymentDetails += `, Retake Amount: ${retakeAmount}`;
        }

        Alert.alert('Payment Details', paymentDetails);
        // You can add code to save the payment details here.
    };

    const renderFeeInputs = () => (
        <View style={styles.buttonContainer}>
            <Text style={styles.label}>Amount to Pay</Text>
            <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                placeholder="Enter amount"
                value={amount}
                onChangeText={setAmount}
            />
            <Text style={styles.label}>Select Bank</Text>
            <Picker
                style={styles.picker}
                selectedValue={bank}
                onValueChange={(itemValue) => setBank(itemValue)}
            >
                <Picker.Item label="Select Bank" value="" />
                {banks.map((bank) => (
                    <Picker.Item key={bank} label={bank} value={bank} />
                ))}
            </Picker>
            <Text style={styles.label}>Account Number</Text>
            <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                placeholder="Enter account number"
                value={accountNumber}
                onChangeText={setAccountNumber}
            />
            <Custombutton text="Save" onPress={onSave} bgColor="green" />
        </View>
    );

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Banking Services</Text>

                {!studentType && (
                    <View style={styles.buttonContainer}>
                        <Text style={styles.subtitle}>Are you a government or private student?</Text>
                        <Custombutton
                            text="Government"
                            onPress={() => setStudentType('Government')}
                            bgColor="green"
                        />
                        <Custombutton
                            text="Private"
                            onPress={() => setStudentType('Private')}
                            bgColor="red"
                        />
                    </View>
                )}

                {studentType === 'Government' && !feeType && (
                    <View style={styles.buttonContainer}>
                        <Text style={styles.subtitle}>Select Fee Type</Text>
                        <Custombutton
                            text="Functional Fees"
                            onPress={() => setFeeType('Functional Fees')}
                            bgColor="green"
                        />
                        <Custombutton
                            text="Other Fees"
                            onPress={() => setFeeType('Other Fees')}
                            bgColor="red"
                        />
                    </View>
                )}

                {studentType === 'Private' && !feeType && (
                    <View style={styles.buttonContainer}>
                        <Text style={styles.subtitle}>Select Fee Type</Text>
                        <Custombutton
                            text="Tuition Fees"
                            onPress={() => setFeeType('Tuition Fees')}
                            bgColor="green"
                        />
                        <Custombutton
                            text="Functional Fees"
                            onPress={() => setFeeType('Functional Fees')}
                            bgColor="red"
                        />
                        <Custombutton
                            text="Other Fees"
                            onPress={() => setFeeType('Other Fees')}
                            bgColor="blue"
                        />
                    </View>
                )}

                {feeType === 'Other Fees' && studentType && (
                    <View style={styles.buttonContainer}>
                        <Text style={styles.subtitle}>Do you have a retake?</Text>
                        <Custombutton
                            text="Yes"
                            onPress={() => setHasRetake('Yes')}
                            bgColor="green"
                        />
                        <Custombutton
                            text="No"
                            onPress={() => setHasRetake('No')}
                            bgColor="red"
                        />
                    </View>
                )}

                {feeType === 'Other Fees' && hasRetake === 'Yes' && (
                    <View style={styles.buttonContainer}>
                        <Text style={styles.label}>Retake Amount</Text>
                        <TextInput
                            style={styles.textInput}
                            keyboardType="numeric"
                            placeholder="Enter retake amount"
                            value={retakeAmount}
                            onChangeText={setRetakeAmount}
                        />
                        {renderFeeInputs()}
                    </View>
                )}

                {(feeType !== 'Other Fees' || hasRetake === 'No') && studentType && feeType && renderFeeInputs()}
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
    buttonContainer: {
        flexDirection: 'r',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
});

export default BankingScreen;
