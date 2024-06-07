import { createAxiosInstance, storeTokens } from "./http"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = async(username, password)=>{
  /* const axiosInstance = await createAxiosInstance();
  /*  try {
        const response = await axiosInstance.post('/api/token/', { username, password },
        {
            withCredentials:true
        }
    )
    await AsyncStorage.setItem('accessToken', '');
    await AsyncStorage.setItem('refreshToken', '');
    await storeTokens(response.data['refresh'])
  //  alert(await AsyncStorage.getItem('accessToken'));

  
    } catch(e){
        alert(e)
    }
  */
}