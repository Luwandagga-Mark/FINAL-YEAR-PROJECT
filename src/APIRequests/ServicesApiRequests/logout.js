import { PhonestoreData } from "../Storedata";
import { accessToken, loggedOut, refreshToken } from "../constants";

export const logoutAPI = async ()=>{
    try {
     
        
  
   await PhonestoreData(accessToken,'');
   await PhonestoreData(refreshToken,'')
return true
  
    } catch(e){
        console.log('error',e)
        throw loggedOut
    }
}