import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Custominput from '../components/Custominput';
import Custombutton from '../components/Custombutton';


const Guardian = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [telephonenumber, setTelephonenumber] = useState('');
    const [relationship, setrelationship] = useState('');
    const [address, setAddress] = useState('');

    const onNextPressed = () =>{
        console.warn('next');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Guardian Details</Text>

            <Custominput
             placeholder="Full Name" 
             value={fullname} 
             setValue={setFullname} 
             />

            <Custominput
             placeholder="Email" 
             value={email} 
             setValue={setEmail} 
            />

            <Custominput
             placeholder="Telephone Number" 
             value={telephonenumber} 
             setValue={setTelephonenumber} 
            />

            <Custominput
             placeholder="Relationship" 
             value={relationship} 
             setValue={setrelationship} 
            />

            <Custominput
             placeholder="Address" 
             value={address} 
             setValue={setAddress} 
            />           

            <Custombutton
             text="next" 
             onPress={onNextPressed}
             bgColor="red" 
             />
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'left',
        padding: 20,
    },
    title:{
        fontSize : 24,
        fontWeight : 'bold',
        color : 'green',
        margin : 30,
    }
});

export default Guardian;
