import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  createAxioshostNOAuth } from "./http";


export const signWithOTP= async (data) => {
    try {
       
      const axiosInstance = await createAxioshostNOAuth();
      const response = await axiosInstance.post('/otpsignin', data,{
        withCredentials: true
    });
      console.log('Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };

  export const verifyOTP= async (data) => {
    try {
       
      const axiosInstance = await createAxioshostNOAuth();
      const response = await axiosInstance.post('/otpverify', data,{
        withCredentials: true
    });
      //console.log('Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };  