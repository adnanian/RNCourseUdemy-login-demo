import axios from 'axios';

export async function authenticate(mode, email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${process.env.EXPO_PUBLIC_API_KEY}`;
    const response = await axios.post(
        url,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    );
    return response;
}

export async function createUser(email, password) {
    return await authenticate('signUp', email, password);
}

export async function login(email, password) {
    return await authenticate('signInWithPassword', email, password);
}