import { login } from './auth.js';

const handleLogin = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        const user = await login(email, password);
        alert('User logged in: ' + user.email);
    } catch (error) {
        alert('Error logging in: ' + error.message);
    }
};

export { handleLogin };
