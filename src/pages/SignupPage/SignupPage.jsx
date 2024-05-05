import React from 'react';
import { Link } from 'react-router-dom';
import styles from './signup.module.css';


function LoginPage() {
  return (
    <div class={styles.loginContainer}>
    <form class={styles.loginForm}>
        <h2>Sign Up</h2>
        <div class={styles.inputGroup}>
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
        </div>
        <div class={styles.inputGroup}>
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
        </div>
        <div class={styles.inputGroup}>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
        </div>
        <div class={styles.inputGroup}>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Sign Up</button>
        <p className={styles.signupLink}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
    </form>
</div>
  )
}

export default LoginPage