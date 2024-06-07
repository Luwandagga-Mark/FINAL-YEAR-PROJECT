import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


const Custominput = ({ value, setValue, placeholder }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 1,
    },
    input: {},
    
});

export default Custominput;
