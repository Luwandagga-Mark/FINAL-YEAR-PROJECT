import { Alert } from "react-native";
import * as LocalAuthentication from 'expo-local-authentication';
import { verifyBioID } from "../BiometricLogin";
import { loginUserAPI } from "../login";
import { getBioID } from "../BiometricSignUp";

export const FingerprintRegister = async (studNumber) => {
  try {
     console.log('dshhjsd',studNumber)
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (hasHardware && isEnrolled) {
        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Authenticate with fingerprint',
        });

        if (result.success) {
          await getBioID({'studNo':studNumber});
        return true
      
        } else {
            return 'Fingerprint authentication failed. Please try again.'
           
        }
    } else {
        return 'Fingerprint authentication is not supported on this device.'
       
    }
  } catch (e){
    console.error('errrot',e)
  }
};