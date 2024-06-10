import AsyncStorage from '@react-native-async-storage/async-storage';

// Storing data
export const PhonestoreData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Data stored successfully');
  } catch (error) {
    console.error('Error storing data:', error);
  }
};

// Retrieving data
export const PhonegetData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('Retrieved data:', '');
      return value
    } else {
        console.log('No data found for key:', key);
        return null
      
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw error
  }
};

// Removing data
export const PhoneremoveData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Data removed successfully');
  } catch (error) {
    console.error('Error removing data:', error);
  }
};
