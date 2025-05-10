import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const authCtx = useContext(AuthContext);

    async function signupHandler({ email, password }) {
        setIsAuthenticating(true);
        try {
            const token = await createUser(email, password);
            authCtx.authenticate(token);
        } catch (error) {
            // console.error('Signup failed:', error.response?.data || error.message);
            Alert.alert('Authentication failed!', 'Could not create user. Please try again.');
            setIsAuthenticating(false);
        }

    }


    if (isAuthenticating) {
        return <LoadingOverlay message='Creating user...' />
    }

    return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;