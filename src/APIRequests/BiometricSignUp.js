import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAxiosInstance, createAxioshost, createAxioshostNOAuth } from "./http";
import * as Device from 'expo-device';
import { PhonegetData, PhonestoreData } from "./Storedata";
import { biometricID } from "./constants";

export const getBioID = async (data) => {
    try {
        const deviceName = Device.deviceName;
        const deviceModel = Device.modelName;
        const apiData = {
           ...data,
           'name':deviceName,
           'model':deviceModel
        }
      const axiosInstance = await createAxioshostNOAuth();
      const response = await axiosInstance.post('/genID', apiData,{
        withCredentials: true
    });
      const data2 = response.data['number'];
    await PhonestoreData(biometricID,data2);
    
      return data2;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };