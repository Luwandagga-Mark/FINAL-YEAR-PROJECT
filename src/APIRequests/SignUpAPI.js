import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAxiosInstance, createAxioshost, createAxioshostNOAuth } from "./http";


export const signUPAPI = async (data) => {
    try {
       
      const axiosInstance = await createAxioshostNOAuth();
      const response = await axiosInstance.post('/students_register', data,{
        withCredentials: true
    });
      //console.log('Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };
  