import { Slot } from 'expo-router';
import { useEffect } from 'react';
import { authenticateAsync } from 'expo-local-authentication';
import { Ionicons } from '@expo/vector-icons';

export default function BiometricProtectedLayout() {
    const [unlocked, setUnlocked] = useState(false);

    useEffect(() => {
        authenticate();

    }, []);

    const authenticate = async () => {
        const res = await authenticateAsync();
        console.log(res);
        if (res.success) {
            setUnlocked(true);
        }
    }
    
    if (!unlocked){
        return  (
            <View style={{ felx: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontFamily: 'Inter', fontSize: 20, marginBottom: 20}}>Use Fingerprint to unlock</Text>;
                <Ionicons
                    name="finger-print-outline"
                    size={40}
                    color="red"
                />
            </View>
        )
    }
    return <Slot />;
}