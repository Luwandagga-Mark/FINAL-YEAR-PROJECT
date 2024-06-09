import { createAxioshostWithAuth } from "../http";

export const uploadProfilePIC= async (data) => {
    try {
       
      const axiosInstance = await createAxioshostWithAuth();
      const response = await axiosInstance.post('/students_profilepic', data,{
        withCredentials: true
    });
      //console.log('Response:', response.data);
      return response.data['data'];
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };  

 
  export const getCurrentDateTimeString = () => {
    const currentDate = new Date();
    
    // Get date components
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(currentDate.getDate()).padStart(2, '0');
    
    // Get time components
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    // Replace invalid characters with underscores
    const fileName = `${year}${month}${day}${hours}${minutes}${seconds}`.replace(/[^a-zA-Z0-9]/g, '_');
    return fileName;
};

// Usage
