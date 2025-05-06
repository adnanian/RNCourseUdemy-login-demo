import axios from 'axios';

const API_KEY = 'AIzaSyBfcinnqFbIrHnHG2i2uIOj6TBBXvSGGZo';

export async function createUser(email, password) {
    console.log('connecting');
    const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
        {
            email: email,
            password: password,
            returnSecureToken: true,
        }
    );
    console.log('respond');
    return response;
}