import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAxiosInstance, createAxioshost, createAxioshostNOAuth } from "./http";
import * as Device from 'expo-device';
import { PhonegetData, PhonestoreData } from "./Storedata";
import { biometricID } from "./constants";

export const verifyBioID = async () => {
    try {
       
      const axiosInstance = await createAxioshostNOAuth();
      const id = await PhonegetData(biometricID);
      if(id){
        const data = {'id':id};
        const response = await axiosInstance.post('/verifyID', data,{
          withCredentials: true
      });
        const data2 = response.data['staus'];
      if (data2 === 'success'){
        return true
      }  else {
        return false
      }
      
      }
      else {
        return false
      }
     
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };

  
export const loginBioID = async () => {
  try {
     
    const axiosInstance = await createAxioshostNOAuth();
    const id = await PhonegetData(biometricID);
   
      const data = {'id':id};
      const response = await axiosInstance.post('/loginBiometric', data,{
        withCredentials: true
    });
      const data2 = response.data;
    return data2;
   
   
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};