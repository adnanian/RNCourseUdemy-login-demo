import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';
import { Alert } from 'react-native';

function LoginScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    async function loginHandler({ email, password }) {
        setIsAuthenticating(true);
        try {
            const result = await login(email, password);
            // console.log('User logged in:', result);
            // Navigate to home screen or auth screen here
        } catch (error) {
            Alert.alert(
                'Authentication failed!',
                'Could not log you in. Please check your credentials or try again later.'
            );
        } finally {
            setIsAuthenticating(false);
        }

    }


    if (isAuthenticating) {
        return <LoadingOverlay message='Creating user...' />
    }

    return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;