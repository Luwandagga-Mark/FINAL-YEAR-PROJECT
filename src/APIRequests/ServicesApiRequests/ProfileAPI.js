import { createAxioshostWithAuth } from "../http";

export const getProfileAPI= async () => {
    try {
       
      const axiosInstance = await createAxioshostWithAuth();
      const response = await axiosInstance.get('/students_profile', {
        withCredentials: true
    });
      //console.log('Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };  