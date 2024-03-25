import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Custominput from '../components/Custominput';
import Custombutton from '../components/Custombutton';


const Others = () => {

    const [specifyother, setSpecifyother] = useState('');

    const { height } = useWindowDimensions();

    const onNextPressed = () =>{
        console.warn('Next');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>WELCOME TO MUK E-SERVICES</Text>
            <Text style={styles.title}>Please Specify service</Text>   

            <Custominput placeholder="Please Specify Other" value={specifyother} setValue={setSpecifyother} />         

            <Custombutton
             text="OK" 
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

export default Others;
