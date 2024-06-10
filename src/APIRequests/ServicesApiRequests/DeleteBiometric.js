import { createAxioshostWithAuth } from "../http";

export const deleteBiometric= async (data) => {
    try {
       
      const axiosInstance = await createAxioshostWithAuth();
      const response = await axiosInstance.post('/deleteBiometric', data,{
        withCredentials: true
    });
      //console.log('Response:', response.data);
      return response.data['data'];
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };  
