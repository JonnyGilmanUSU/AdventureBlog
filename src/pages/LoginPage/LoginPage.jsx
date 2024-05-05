import React from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';


function LoginPage() {
  return (
    <div class={styles.loginContainer}>
    <form class={styles.loginForm}>
        <h2>Login</h2>
        <div class={styles.inputGroup}>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required />
        </div>
        <div class={styles.inputGroup}>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
        <p className={styles.signupLink}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
    </form>
</div>
  )
}

export default LoginPage