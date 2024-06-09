
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAxioshostNOAuth } from './http';
import { PhonestoreData } from './Storedata';
import { accessToken, refreshToken } from './constants';

export const loginUserAPI = async(username, password)=>{
   const axiosInstance = await createAxioshostNOAuth();
    try {
        const response = await axiosInstance.post('/api/token/', { username, password },
        {
            withCredentials:true
        }
    )
   /* */
  
   await PhonestoreData(accessToken,response.data[accessToken]);
   await PhonestoreData(refreshToken,response.data[refreshToken])
  //  alert(await AsyncStorage.getItem('accessToken'));
return true
  
    } catch(e){
        throw e
    }
  
}