import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAxiosInstance, createAxioshost, createAxioshostNOAuth } from "./http";


export const getStudentNo = async (data) => {
    try {
       
      const axiosInstance = await createAxioshostNOAuth();
      const response = await axiosInstance.post('/getStdNo', data,{
        withCredentials: true
    });
      const data2 = response.data['number'];
    
      return data2;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };