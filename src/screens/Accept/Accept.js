import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';

const Accept = () => {

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            
            <Text style={styles.title}>ACCESS GRANTED</Text>            

        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 50,
    },
    title:{
        fontSize : 36,
        fontWeight : 'bold',
        color : 'green',
        margin :20,
    },
    text:{
        fontSize : 16,
        color : 'black',
        margin : 5,
        padding: 10,
    }
});

export default Accept;
