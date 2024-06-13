import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform, ActivityIndicator, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { getProfileAPI } from '../../APIRequests/ServicesApiRequests/ProfileAPI';
import { loggedOut } from '../../APIRequests/constants';
import { useNavigation } from '@react-navigation/native';

import { getCurrentDateTimeString, uploadProfilePIC } from '../../APIRequests/ServicesApiRequests/UploadProfilePic';
import { logoutAPI } from '../../APIRequests/ServicesApiRequests/logout';
import Icon from 'react-native-vector-icons/Ionicons';
import { deleteBiometric } from '../../APIRequests/ServicesApiRequests/DeleteBiometric';
import { FingerprintRegister } from '../../APIRequests/ServicesApiRequests/RegisterBiometric';
import { verifyBioID } from '../../APIRequests/BiometricLogin';

const FullWidthButton = ({ onPress, title }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const UserProfileBiometric = ({ userProfileBiometric, handleDelete }) => {
    return (
        <View>
            {userProfileBiometric.map((item, index) => (
                <View style={Biometricstyles.row} key={item.id}>
                    <Text style={Biometricstyles.label}>
                        Device: <Text style={Biometricstyles.value}>{item.device}</Text>
                    </Text>
                    <TouchableOpacity onPress={() => handleDelete(index)}>
                        <Icon name="trash" size={24} color="red" style={Biometricstyles.icon} />
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};
const Profile = () => {
    const [image, setImage] = useState(null);
    const [stud, setStud] = useState(null);
    const [ref, setRef] = useState(true);
    const [showBiometricAddButoon, setShowBiometricAddButoon] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userProfile, setUserProfile] = useState(null);
    const [userProfileBiometric, setUserProfileBiometric] = useState(null);
    const navigation = useNavigation();
    useEffect(() => {
        fetchUserProfile();
    }, [ref]);
const signupBio = async ()=>{
    const loginSuccess = await FingerprintRegister(stud)
    if (loginSuccess === true){
        setRef(!ref)
         Alert.alert('Success', 'Fingerprint authentication successful.');
    
    
    } else {
     Alert.alert('Failed', `${loginSuccess}`);
    }
}
    const fetchUserProfile = async () => {
        try {
            const response = await getProfileAPI();
            setUserProfile(response.data);
            setStud(response.studno);
            setUserProfileBiometric(response.biometric)
        await    setImage(response.data.profilepic)
            setLoading(false);
            const addButton = await verifyBioID();
            if (addButton){
                setShowBiometricAddButoon(false)
            } else{
                setShowBiometricAddButoon(true)
            }
        } catch (error) {
            const errorCompare =String(error.message);
            
            if (errorCompare.includes(loggedOut)){
                
               navigation.reset({
                    index: 0,
                    routes: [{ name: 'SignIn' }],
                  });
            }
            console.log('Error   profile', error); 
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
        
            uploadImage(result.assets[0].uri); 

        }
    };
 const uploadImage = async (uri) => {
        const formData = new FormData();
        const name = await getCurrentDateTimeString();
        formData.append('file', {
            uri,
            name: `${name}.jpg`,
            type: 'image/jpeg'
        });

        try {
            await uploadProfilePIC(formData)
            console.log('Image uploaded successfully:', '');
            setRef(!ref)
            //    await fetchUserProfile()
            Alert.alert('Success', 'Image uploaded successfully');
        } catch (error) {
            console.error('Error uploading image:', error);
            Alert.alert('Error', 'Failed to upload image');
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
    const handleDelete = async (id) => {
        try {
            await deleteBiometric(userProfileBiometric[id])
            setRef(!ref)
           
        } catch (e){
            console.error('Error deleting device:', error);
        }
        
       // setUserProfileBiometric((prev) => prev.filter((item) => item.id !== id));
    };

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
            <View style={styles.infoContainer}>

                <View style={Biometricstyles.row} >
                    <Text style={Biometricstyles.label}>
                    Biometric Devices <Text style={Biometricstyles.value}></Text>
                    </Text>
                    {showBiometricAddButoon ?   <TouchableOpacity onPress={async() => {
                        await signupBio();
                        setRef(!ref)
                    
                    }}>
                        <Icon name="add" size={28} color="black" style={Biometricstyles.icon} />
                    </TouchableOpacity>:''}
                  
                </View>
                <UserProfileBiometric 
                userProfileBiometric={userProfileBiometric}
                handleDelete={handleDelete}
            />
            </View>
            <View style={styles.container}>
      <FullWidthButton onPress={async() => {
        await logoutAPI()
        navigation.reset({
            index: 0,
            routes: [{ name: 'SignIn' }],
           }); 
      }} title="Log Out" />
    </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      },
      button: {
        width: '100%',
        backgroundColor: '#007BFF',
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
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


const Biometricstyles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    value: {
        fontWeight: 'normal',
        color: '#666',
    },
    icon: {
        marginLeft: 10,
    },
});

export default Profile;
