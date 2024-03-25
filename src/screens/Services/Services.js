import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Custominput from '../components/Custominput';
import Custombutton from '../components/Custombutton';


const Services = () => {

    const onMedicalPressed = () =>{
        console.warn('Medical');
    }
    const onAccomodationPressed = () =>{
        console.warn('Accomodation');
    }
    const onBankingPressed = () =>{
        console.warn('Banking');
    }
    const onParkingPressed = () =>{
        console.warn('Parking');
    }
    const onFoodPressed = () =>{
        console.warn('Food');
    }
    const onExaminationPressed = () =>{
        console.warn('Examination');
    }
    const onLibraryPressed = () =>{
        console.warn('Library');
    }
    const onInternetPressed = () =>{
        console.warn('Internet');
    }
    const onOtherPressed = () =>{
        console.warn('Other ');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>WELCOME TO MUK E-SERVICES</Text>
            <Text style={styles.title}>Please Select Service</Text>            

            <Custombutton
             text="MEDICAL" 
             onPress={onMedicalPressed}
             bgColor="black" 
             />

            <Custombutton
             text="ACCOMODATION" 
             onPress={onAccomodationPressed}
             bgColor="green" 
            />
            <Custombutton
             text="BANKING" 
             onPress={onBankingPressed}
             bgColor="red" 
            />

            <Custombutton
             text="PARKING" 
             onPress={onParkingPressed}
             bgColor="black" 
            />

            <Custombutton
             text="FOOD" 
             onPress={onFoodPressed}
             bgColor="green" 
            />

            <Custombutton
             text="EXAMINATION" 
             onPress={onExaminationPressed}
             bgColor="red" 
            />

            <Custombutton
             text="LIBRARY" 
             onPress={onLibraryPressed}
             bgColor="black" 
            />

            <Custombutton
             text="INTERNET" 
             onPress={onInternetPressed}
             bgColor="green" 
            />

            <Custombutton
             text="OTHER" 
             onPress={onOtherPressed}
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
    title:{
        fontSize : 18,
        fontWeight : 'bold',
        color : 'green',
        margin : 10,
    },
    text:{
        fontSize : 16,
        color : 'black',
        margin : 5,
        padding: 10,
    }
});

export default Services;
