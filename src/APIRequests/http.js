import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';



const baseURL ='https://bed8-197-239-11-61.ngrok-free.app'


export const storeTokens = async ( refreshToken) => {

    try {
        const axiosInstance = axios.create(
            {
baseURL:baseURL,
headers:{
    "Accept":"application/json",
    "Content-Type": "application/json"
    
}
            }
        )
        const response = await axiosInstance.post('/api/token/refresh/', {'refresh':  `${refreshToken}` },
        {
            withCredentials:true
        }
    )
    
        await AsyncStorage.setItem('accessToken', response.data['access']);
        await AsyncStorage.setItem('refreshToken', response.data['refresh']);
    } catch (error) {
        console.error('Error storing tokens:', error);
        //throw new Error(`error ${error}`)
    }
};

export const createAxioshostNOAuth=  async ()=>{
    try{
       
        const axiosInstance = axios.create(
            {
baseURL:baseURL,
headers:{
    "Accept":"application/json",
    "Authorization":`Bearer ${accessToken}`
}
            }
        )
        
        return axiosInstance;
    }catch(e){
        console.log('error',e)
      throw new Error(`error ${e}`)
    }
}

export const createAxioshostWithAuth=  async ()=>{
    try{
        var accessToken =''
     
   //await  alert(accessToken);
        const axiosInstance = axios.create(
            {
baseURL:baseURL,
headers:{
    "Accept":"application/json",
    "Authorization":`Bearer ${accessToken}`
}
            }
        )
        
        return axiosInstance;
    }catch(e){
        console.log('error',e)
      throw new Error(`error ${e}`)
    }
}



