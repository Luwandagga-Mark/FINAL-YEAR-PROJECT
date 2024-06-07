import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const Profile = () => {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        try {
            const response = await axios.get('http://172.20.10.6:8000/user-profile/', {
                params: { firstname: 'your_firstname' }
            });
            setUserProfile(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching user profile', error);
            setLoading(false);
        }
    };

    const pickImage = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
                return;
            }
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            console.log(result.assets[0].uri); // Debug: log the selected image URI
            setImage(result.assets[0].uri);
        }
    };

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (!userProfile) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Failed to load profile</Text>
            </View>
        );
    }

    return (
        <View style={styles.root}>
            <TouchableOpacity onPress={pickImage}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.avatar} />
                ) : (
                    <View style={styles.placeholder}>
                        <Text style={styles.placeholderText}>Tap to select an image</Text>
                    </View>
                )}
            </TouchableOpacity>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>First Name: <Text style={styles.value}>{userProfile.firstname}</Text></Text>
                <Text style={styles.label}>Surname: <Text style={styles.value}>{userProfile.surname}</Text></Text>
                <Text style={styles.label}>Email: <Text style={styles.value}>{userProfile.email}</Text></Text>
                <Text style={styles.label}>Telephone Number: <Text style={styles.value}>{userProfile.telephonenumber}</Text></Text>
                <Text style={styles.label}>Date of Birth: <Text style={styles.value}>{userProfile.dateofbirth}</Text></Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    placeholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderText: {
        color: '#fff',
    },
    infoContainer: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
        color: '#333',
    },
    value: {
        fontWeight: 'normal',
        color: '#666',
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
});

export default Profile;
