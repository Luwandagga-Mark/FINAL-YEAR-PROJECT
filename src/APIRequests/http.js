import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { accessToken, baseURL, loggedOut, refreshToken } from "./constants";
import { PhonegetData, PhonestoreData } from "./Storedata";






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
    
}
            }
        )
        
        return axiosInstance;
    }catch(e){
        console.log('error',e)
      throw new Error(`error ${e}`)
    }
}

export const refreshTokenAPI = async ()=>{
    try {
        const axiosInstance1 = await createAxioshostNOAuth();
        const datarefreshtoken = await PhonegetData(refreshToken)
        const data = {
            refresh: datarefreshtoken,
          }
        
        const response = await axiosInstance1.post('/api/token/refresh/',data  ,
        {
            withCredentials:true
        }
    )

  
   await PhonestoreData(accessToken,response.data[accessToken]);
   await PhonestoreData(refreshToken,response.data[refreshToken])
return true
  
    } catch(e){
        console.log('error',e)
        throw loggedOut
    }
}

export const createAxioshostWithAuth=  async ()=>{
    try{
        await refreshTokenAPI()
        const accessTokenBackend = await PhonegetData(accessToken);
     
   //await  alert(accessToken);
        const axiosInstance = axios.create(
            {
baseURL:baseURL,
headers:{
    "Accept":"application/json",
    "Authorization":`Bearer ${accessTokenBackend}`,
    'Content-Type': 'multipart/form-data',
}
            }
        )
        
        return axiosInstance;
    }catch(e){
        console.log('error',e)
      throw new Error(`error ${e}`)
    }
}



