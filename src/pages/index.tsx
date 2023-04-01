import React, { useRef } from "react";
import styles from "@/styles/Auth.module.css";
import { useForm } from "@/hooks/useForm";

type typeInitialValue = {
  username: string;
  password: string;
};

type typeFormValidations = {
  username: [(value: string) => boolean, string];
  password: [(value: string) => boolean, string];
};

const initialValue: typeInitialValue = {
  username: "",
  password: "",
};

const formValidations: typeFormValidations = {
  username: [
    (value: string) => /^[a-zA-Z0-9]*.{3,15}$/.test(value),
    "Username is required",
  ],
  password: [
    (value: string) =>
      /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/.test(
        value
      ),
    "Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long",
  ],
};

const Index = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const { onInputChange, username, password, isFormValid, usernameValid, passwordValid } = useForm(initialValue, formValidations);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Submitting form...");
    // TODO: Implement authentication logic here
  };

  return (
    <div className={styles.login}>
      <h3 className={styles.login__title}>Login</h3>
      <form className={styles.login__form} onSubmit={handleSubmit}>
        <div className={styles.login__inputContainer}>
          <input
            type="text"
            title="Username"
            name="username"
            value={username}
            onChange={onInputChange}
            placeholder="  Username"
            className={styles.login__input}
            ref={usernameRef}
            required
          />
        </div>
        <div className={styles.login__inputContainer}>
          <input
            type="password"
            title="Password"
            placeholder="  Password"
            className={styles.login__input}
            name="password"
            value={password}
            onChange={onInputChange}
            ref={passwordRef}
            required
          />
        </div>
        <button type="submit" className={styles.login__button}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Index;
