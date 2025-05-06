import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';

function SignupScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    async function signupHandler({ email, password }) {
        setIsAuthenticating(true);
        try {
            const result = await createUser(email, password);
            // console.log('User created:', result);
            // Navigate to home screen or auth screen here
        } catch (error) {
            // console.error('Signup failed:', error.response?.data || error.message);
            Alert.alert('Authentication failed!', 'Could not create user. Please try again.');
        } finally {
            setIsAuthenticating(false);
        }

    }


    if (isAuthenticating) {
        return <LoadingOverlay message='Creating user...' />
    }

    return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;