import React from 'react';
import './LoginSignupPage.css';

function LoginSignupPage() {
    return (
        <div className="login-signup-content">
            <h1>Login / Signup</h1>
            <form action="/login" method="post">
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/signup">Signup here</a></p>
        </div>
    );
}

export default LoginSignupPage;
