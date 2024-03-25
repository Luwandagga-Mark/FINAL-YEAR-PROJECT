import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Custombutton from '../components/Custombutton';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const Fingerprint = () => {

    const onNextPressed = () =>{
        console.warn('Next');
    } 

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            
            <Text style={styles.title}>Touch the Fingerprint sensorzone below to enter your fingerprint </Text>
            
            <Ionicons name="finger-print-outline" size={100} color="black" />

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
        alignItems: 'center',
        padding: 40,
        marginBottom: 10,
    },
    title:{
        fontSize : 30,
        fontFamily : 'Inter-Black',
        color : 'green',
        margin :20,
    },
   
});

export default Fingerprint;
